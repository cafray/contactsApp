import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React,{ useState, useEffect } from 'react'

import useOne from '../servicos/OneContexto';

const CRegistro = () => {

  const { registroUsuario, usuarioID, contacto } = useOne();

  const [dadosReg, setDadosReg] = useState({
    email:'',
    nomeCompleto:'',
    palavraPasse:'',
    repPalavraPasse:''
  });

  const handleReg = async (dadosReg) => {
    try {
      await registroUsuario(dadosReg);
      console.log(dadosReg);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="space-y-5">
        <View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={dadosReg.email}
                  placeholder='Email'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setDadosReg({...dadosReg, email:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={dadosReg.nomeCompleto}
                  placeholder='Nome completo'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setDadosReg({...dadosReg, nomeCompleto:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={dadosReg.palavraPasse}
                  placeholder='Palavra-passe'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setDadosReg({...dadosReg, palavraPasse:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={dadosReg.repPalavraPasse}
                  placeholder='Repita a palavra passe'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setDadosReg({...dadosReg, repPalavraPasse:text})}
              />
            </View>
        </View>
        <View className="px-8">
          <TouchableOpacity className="bg-[#E76640] p-4 items-center rounded-xl"
            onPress={() => handleReg(dadosReg)}
          >
            <Text className="text-white font-bold">Criar Conta</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CRegistro