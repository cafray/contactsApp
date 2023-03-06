import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import ButaoPrincipal from '../componentes/ButaoPrincipal';
import CampoTexto from '../componentes/CampoTexto';

import { useNavigation } from '@react-navigation/native';

const EditarContacto = ({route}) => {

  const navigation = useNavigation();
  const itensNav = route.params; 

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
  
  //const { item } = route.params;

  return (
    <View className="bg-[#111111] pt-6 flex-1">
        <View className="flex-row justify-between items-center">
            <View>
                <Ionicons name="chevron-back" size={30} color="white" />
            </View>
            <View>
                <Text className="text-white">Editar Contacto</Text>
            </View>
        <View>
        <TouchableOpacity className="bg-[#E76640] py-2 px-4 items-center rounded-xl"
            //onPress={() => handleContacto(contacto)}
          >
            <Text className="text-white text-[12px] font-bold">Guardar</Text>
          </TouchableOpacity>
        </View>
        <View>
            <Ionicons name="md-trash-bin" size={15} color="white" />
        </View>
        
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
    </View>
  )
}

export default EditarContacto