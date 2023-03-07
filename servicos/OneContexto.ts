import { createContext, useContext, useReducer, useEffect } from "react";
import { auth, db } from "../FirebaseConfig";
import { getAuth
    , createUserWithEmailAndPassword
    , signInWithEmailAndPassword
    , signOut
    , onAuthStateChanged} from "firebase/auth";

import { collection, setDoc, doc, updateDoc, getDocs, deleteDoc, getDoc } from "firebase/firestore"; 

import oneReducer,{ initialState } from "./oneReducer";

const OneContexto = createContext();

type PropExterno = {
    contacto: any,
    usuario:any,
    email:any,
    nomeCompleto:any,
    palavraPasse:any,
    telefone:any,
    id:any
}

export const OneProvider = ({children}) => {

    const [state, dispatch] = useReducer(oneReducer,initialState);

    useEffect(() => {
      onAuthStateChanged(auth,(currentUser) => {
        //console.log(currentUser.uid);
        const usuarioID = currentUser.uid;
         dispatch({type:"USUARIO_LOGADO",
                 payload: {
                    usuarioID: usuarioID
                 }});
      });

    }, []);

    
    const registroUsuario = async (usuario:PropExterno) =>{

        const {email, nomeCompleto, palavraPasse} = usuario;

        const dadosReg = {
            email: email,
            nomeCompleto: nomeCompleto,
            palavraPasse: palavraPasse
        }
        try {
            await createUserWithEmailAndPassword(auth, dadosReg.email, dadosReg.palavraPasse)
            .then((userCredential) =>{
                const user = userCredential.user;
                const docRef = doc(db, "usuarios", user.uid);
                //console.log(user.uid);
                setDoc(docRef,dadosReg)
                .then(console.log("Documento adicionado com sucesso")
                .catch(error=>{console.log(error)}));
            }).catch((error) =>{
                console.log(error);
            });
        } catch (error) {
            console.log(error)
        }

    }

    const logarUsuario = async (usuario:PropExterno) => {

        const {email, palavraPasse } = usuario;

        try {
           await signInWithEmailAndPassword(auth,email, palavraPasse)
           .then(() =>console.log("usuario logado com sucesso"))
           .catch((error) => console.log(error));
        } catch (error) {
            console.log(error);
        }

    }

    const adicionarContacto = (contacto:PropExterno ) => {
        const { telefone } = contacto;
        const docRef = doc(db, "usuarios", state.usuarioID,"contactos", telefone);
       
        setDoc(docRef,contacto)
            .then(console.log("Contacto adicionado com sucesso"))
            .catch((error) =>{console.log(error)});

    }

    const listarContacto = async () => {
        const subColRef = collection(db, "usuarios",state.usuarioID, "contactos");
        const querySnapshot = await getDocs(subColRef);
        const tempConts = [];
        querySnapshot.forEach((doc) => {
            
            const nContactos = {
                id:doc.id,
                ...doc.data()
            }
            tempConts.push(nContactos);
            //const checkedContactos = state.contactos.filter((currentContact) =>currentContact.id !== doc.id);
            //const updateContactos = checkedContactos.concat(nContactos);
            //console.log(doc.id, "=>", doc.data());
            //console.log(state.contactos);
        });
       // console.log(tempConts);
        dispatch({
            type:"LISTAR_CONTACTOS",
            payload:{
                contactos: tempConts
            }
        });
    }

    const editarContactoC = async (contacto:PropExterno) => {
        const { telefone } = contacto;

        console.log("Contacto editar:", contacto);

        const docRef = doc(db, "usuarios", state.usuarioID,"contactos", telefone);
        
        await updateDoc(docRef,contacto)
        .then(console.log("Contacto actualizado com sucesso"))
        .catch((error) =>{console.log(error)});

    }

    const apagarContacto = async (contacto:PropExterno) => {

        const { telefone } = contacto;

        const docRef = doc(db, "usuarios", state.usuarioID,"contactos", telefone);

        await deleteDoc(docRef)
        .then(console.log("Contacto apagado com sucesso"))
        .catch((error) =>{console.log(error)});;

    }

    const sair = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Usario logged out com sucesso");
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }

    const toggleFavorito = async (id:PropExterno) =>{

        console.log(id);
        const docRef = doc(db, "usuarios", state.usuarioID,"contactos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().favorito);
            const togglefav = docSnap.data().favorito;
                updateDoc(docRef, {
                    favorito: !togglefav
                });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }

    const value = {
        usuarioID: state.usuarioID,
        contacto: state.contacto,
        contactos: state.contactos,
        favoritos: state.favoritos,
        registroUsuario,
        adicionarContacto,
        listarContacto,
        logarUsuario,
        apagarContacto,
        editarContactoC,
        sair,
        toggleFavorito
    }

    return <OneContexto.Provider value={value}>
        {children}
    </OneContexto.Provider>

}

const useOne = () => {
    const context = useContext(OneContexto);
    if(context === undefined){
        throw new Error("Useone nao definido, or else...");
    }
    return context;
}

export default useOne;

