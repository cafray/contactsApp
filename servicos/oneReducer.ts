export const initialState = {
   usuarioID:'', 
   contacto:{},
   contactos:[],
   favoritos:[] 
}

const oneReducer = (state, action) =>{
    const {type, payload} = action;

    switch(type) {
        case "REGISTRO_USUARIO":
            console.log("REGISTRO_USUARIO", payload)
            return {
                ...state,
                usuario: payload.usuario
            }
        case "USUARIO_LOGADO":
            console.log("USUARIO_LOGADO", payload)
            return {
                ...state,
                usuarioID: payload.usuarioID
            }
        case "CONTACTO_ADICIONADO":
            console.log("CONTACTO_ADICIONADO", payload)
            return {
                ...state,
                contacto: payload.contacto
            }
        case "LISTAR_CONTACTOS":
            console.log("LISTAR_CONTACTOS", payload)
            return {
                ...state,
                contactos: payload.contactos
            }
        case "APAGAR_CONTACTO":
              console.log("APAGAR_CONTACTO", payload)
              return state
        case "EDITAR_CONTACTO":
              console.log("EDITAR_CONTACTO", payload)
              return state 
        case "ADICIONAR_FAVORITO":
            console.log("ADICIONAR_FAVORITO", payload)
            return {
                ...state,
                favoritos: payload.favoritos
            }         
        default:
            console.log("Nenhum caso encontrado para este tipo");
            return state                

    }

}

export default oneReducer;