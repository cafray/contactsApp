import { Text, View, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CampoTexto = (props) => {
  
  return (
    <View className="bg-[#1E1E1E] mt-3 rounded-xl">
      <TextInput
          className="p-3"
          placeholder={props.placeholder}
          placeholderTextColor="white"
      />
    </View>
  )
}

export default CampoTexto