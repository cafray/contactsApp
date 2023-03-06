import { View, Text,Image, Pressable } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { LogoImagem } from '../assets'
import CLogin from '../componentes/CLogin'
import CRegistro from '../componentes/CRegistro'
import { useNavigation } from '@react-navigation/native'

const PaginaLogin = () => {

 const [regEscolha, setRegEscolha] = useState(true);
 const navigation = useNavigation();

 useEffect(() => {
    console.log(regEscolha);

 }, [regEscolha])
 
  return (
    <View className="bg-[#111111] flex-1 justify-start pt-8">

        <View className="px-6 items-center space-y-8">
            <Image
                source={LogoImagem}
                className=""
            />
            <Text className="text-white">Bem-vindo ao aplicativo de gestão de contactos OneContact, por favor inicie a sua secção, caso não possua uma conta, clique em criar conta.</Text>
        </View>

        <View className="mt-8 py-8 px-6 space-y-4">
            <View className="flex-row space-x-5">
                <Pressable
                    onPress={() => {setRegEscolha(true)}}
                >
                    <Text className="text-white">
                        Entrar
                    </Text>
                   
                </Pressable>
                <Pressable
                    onPress={() => {setRegEscolha(false)}}
                >
                    <Text className="text-white">
                        Criar Conta
                    </Text>
                </Pressable>
            </View>
            <View>
                
            </View>
             {regEscolha ? <CLogin /> : <CRegistro />}

            <View>

            <Text className="text-[#E76640]">
                Esqueci minha senha!
            </Text>
            </View>
            
        </View>

      
    </View>
  )
}

export default PaginaLogin