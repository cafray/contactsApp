import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const ContactoSingular = (props) => {

  let NomeC = props.item.nomeProprio;

  return (
    <View className="flex-row space-x-3 justify-between px-4 mt-3">
        <View className="flex-row space-x-3 justify-center items-center">
            <View className="border-white w-10 h-10 border-2 rounded-full items-center justify-center">
            <Text className="text-white text-[25px]">{NomeC[0]}</Text>
            </View>
            <View className="">
                <Text className="text-white text-[23px]">{`${props.item.nomeProprio} ` + `${props.item.apelido}`}</Text>
                <Text className="text-[#8C8C8C] text-[12px]">{props.item.telefone}</Text>
            </View>
        </View>
      
      <View className="justify-center items-center">
        <Entypo name="star-outlined" size={24} color="white" />
      </View>
    </View>
  )

}

export default ContactoSingular