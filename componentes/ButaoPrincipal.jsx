import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ButaoPrincipal = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="bg-[#E76640] p-4 items-center rounded-xl"
      onPress={() => {navigation.navigate('OneStack')}}
    >
      <Text className="text-white font-bold">Entrar</Text>
    </TouchableOpacity>
  )
}

export default ButaoPrincipal