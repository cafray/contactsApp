import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

import useOne from '../servicos/OneContexto';

import { useNavigation } from '@react-navigation/native';

const EditarContacto = ({route}) => {

  const{ editarContactoC, apagarContacto } = useOne();

  const navigation = useNavigation();
  const itensNav = route.params; 

  const [modalVisivel, setModalVisivel] = useState(false);

  const [editarContacto, setEditarContacto] = useState({
    tituloAcademico:itensNav.tituloAcademico,
    nomeProprio:itensNav.nomeProprio,
    primeiroApelido:itensNav.primeiroApelido,
    apelido:itensNav.apelido,
    empresa:itensNav.empresa,
    departamento:itensNav.departamento,
    cargo:itensNav.cargo,
    telefone:itensNav.telefone,
    descricao:itensNav.descricao
  })

  useEffect(() => {
   console.log(editarContacto);
  }, [editarContacto]);
  
  const handleEditar = async (contacto) => {
    try {

     await editarContactoC(contacto);
      console.log(contacto);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  const handleApagar = async (contacto) => {
    try {

      await apagarContacto(contacto);
      console.log(contacto);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  //const { item } = route.params;

  return (
    <View className="bg-[#111111] pt-6 flex-1">
        <View className="flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() =>navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <View>
                <Text className="text-white">Editar Contacto</Text>
            </View>
        <View>
        <TouchableOpacity className="bg-[#E76640] py-2 px-4 items-center rounded-xl"
            onPress={() => handleEditar(editarContacto)}
          >
            <Text className="text-white text-[12px] font-bold">Guardar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisivel(true)}
        >
            <Ionicons name="md-trash-bin" size={15} color="white" />
        </TouchableOpacity>
        
        </View>
        <ScrollView className="px-3">
          <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.tituloAcademico}
                  placeholder='Titulo Academico ou Profissional'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, tituloAcademico:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.nomeProprio}
                  placeholder='Nome Proprio'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, nomeProprio:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.primeiroApelido}
                  placeholder='Primeiro Apelido'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, primeiroApelido:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.apelido}
                  placeholder='Apelido'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, apelido:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.empresa}
                  placeholder='Empresa'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, empresa:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.departamento}
                  placeholder='Departamento'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, departamento:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.cargo}
                  placeholder='Titulo ou Cargo'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, cargo:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.telefone}
                  placeholder='Telefone'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, telefone:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={editarContacto.descricao}
                  placeholder='Descricao ou mais informacoes'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setEditarContacto({...editarContacto, descricao:text})}
              />
            </View>
      </ScrollView>

      <Modal 
        animationType='slide'
        transparent={true}
        style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        visible={modalVisivel}
        onRequestClose={()=> setModalVisivel(false)}
      >
        <View className="flex-1 justify-center items-center">
          <View className="w-[300px] h-[200px] bg-black items-center">
              <Text className="text-white text-20 font-bold py-3">Alerta</Text>
              <Text className="text-white text-20 p-3">Voce Deseja Remover {editarContacto.nomeProprio} {editarContacto.apelido}</Text>
              <Text className="text-white text-20 py-3">Esta Accao nao podera ser desfeita</Text>
              <View className="flex-row space-x-5">
                <TouchableOpacity className="bg-[#E76640] p-2 rounded-xl"
                  onPress={() =>handleApagar(editarContacto)}
                ><Text className="text-white">Remover</Text></TouchableOpacity>
                <TouchableOpacity className="border-2 border-white p-2 rounded-xl"
                  onPress={() =>setModalVisivel(false)}
                ><Text className="text-white">Cancelar</Text></TouchableOpacity>
              </View>
              
          </View> 
          
        </View>
      </Modal>

    </View>
  )
}

export default EditarContacto