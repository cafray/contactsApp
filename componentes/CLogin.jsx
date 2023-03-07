import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'

import useOne from '../servicos/OneContexto';

const CLogin = () => {

 const { logarUsuario } = useOne();

  const [dadosLogin, setDadosLogin] = useState({
    email:'',
    palavraPasse:'',
  });


  const handleLogin = async (data) =>{
    
    try {
      await logarUsuario(data);
      console.log(data);
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
                  value={dadosLogin.email}
                  placeholder='Email'
                  placeholderTextColor="white"
                  onChangeText = {(text) => setDadosLogin({...dadosLogin, email:text})}
              />
            </View>
            <View className="bg-[#1E1E1E] mt-3 rounded-xl">
              <TextInput
                  className="p-3 text-white"
                  value={dadosLogin.palavraPasse}
                  placeholder='Palavra-passe'
                  onChangeText = {(text) => setDadosLogin({...dadosLogin, palavraPasse:text})}
                  placeholderTextColor="white"
              />
            </View>
          </View>
        <View className="px-8">
          <TouchableOpacity className="bg-[#E76640] p-4 items-center rounded-xl"
            onPress={() => handleLogin(dadosLogin)}
          >
            <Text className="text-white font-bold">Entrar</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default CLogin