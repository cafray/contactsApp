import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import useOne from '../servicos/OneContexto';
import { useNavigation } from '@react-navigation/native';

const NovoContacto = () => {

  const navigation = useNavigation();

  const { adicionarContacto } = useOne();

  const [contacto, setContacto] = useState({
    tituloAcademico:'',
    nomeProprio:'',
    primeiroApelido:'',
    apelido:'',
    empresa:'',
    departamento:'',
    cargo:'',
    telefone:'',
    descricao:'',
    favorito: false
  });

  const handleContacto = async (contacto) => {
    try {

     await adicionarContacto(contacto);
      console.log(contacto);
      
    } catch (error) {
      
    }
    
  }

  return (
    <SafeAreaView className="bg-[#111111] pt-6 flex-1">
        <View className="flex-row justify-between items-center">
            <TouchableOpacity
                onPress={() =>navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
            <View>
                <Text className="text-white">Novo Contacto</Text>
            </View>
        <View>
          <TouchableOpacity className="bg-[#E76640] p-2 items-center rounded-xl"
            onPress={() => handleContacto(contacto)}
          >
            <Text className="text-white text-[12px] font-bold">Guardar</Text>
          </TouchableOpacity>
        </View>
        </View>
      <ScrollView className="px-3">
          <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.tituloAcademico}
                  placeholder='Titulo Academico ou Profissional'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, tituloAcademico:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.nomeProprio}
                  placeholder='Nome Proprio'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, nomeProprio:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.primeiroApelido}
                  placeholder='Primeiro Apelido'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, primeiroApelido:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.apelido}
                  placeholder='Apelido'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, apelido:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.empresa}
                  placeholder='Empresa'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, empresa:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.departamento}
                  placeholder='Departamento'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, departamento:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.cargo}
                  placeholder='Titulo ou Cargo'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, cargo:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.telefone}
                  placeholder='Telefone'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, telefone:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={contacto.descricao}
                  placeholder='Descricao ou mais informacoes'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setContacto({...contacto, descricao:text})}
              />
            </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NovoContacto