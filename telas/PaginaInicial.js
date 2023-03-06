import { ScrollView, StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import CampoTexto from '../componentes/CampoTexto'
import { Ionicons } from '@expo/vector-icons';
import ContactoSingular from '../componentes/ContactoSingular';
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import useOne from '../servicos/OneContexto';


const PaginaInicial = () => {

  const { contactos, listarContacto, toggleFavorito } = useOne();
  //const [togglefav, setTogglefav] = useState();

    const navigation = useNavigation();

    useLayoutEffect(() => {
       listarContacto();
       // console.log(contactos);
     }, [contactos]);

  return (
    <SafeAreaView className="bg-[#111111] flex-1 pt-5 relative">
      <View className="flex-row bg-[#1E1E1E] mx-2 rounded-xl">
        <TouchableOpacity className="flex-3 px-3 items-center justify-center"
            onPress={() =>navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={35} color="white" />
        </TouchableOpacity>
         <View className="flex-1" >
          <CampoTexto placeholder={`Teste`} handleInput={`Teste2`}/>
         </View>
        <View className="flex-3 px-3 items-center justify-center">
        <Ionicons name="ios-person-circle-outline" size={35} color="white" />
        </View>  
      </View>
      <View className="flex-1 relative">
        <FlatList 
            data={contactos}
            numColumns= {1}
            renderItem={({item}) =><View className="flex-row justify-between">
              <TouchableOpacity
                onPress={()=>navigation.navigate('EditarContacto',item)}
              >
                <ContactoSingular item={item}/>
              </TouchableOpacity>
              <TouchableOpacity className="justify-center items-center p-5"
                onPress={() =>toggleFavorito(item.id)}
              >
               {item.favorito ? <Entypo name="star-outlined" size={24} color="white" />:<Entypo name="star" size={24} color="white" />} 
              </TouchableOpacity>
              </View>}
            keyExtractor={item => item.id}
          />
        
      </View>
    
      <View className="bg-[#E76640] absolute items-center h-[50px] w-[50px] bottom-[5] right-[6] rounded-full ">
        <TouchableOpacity className="justify-center items-center pt-4"
          onPress={() =>navigation.navigate('NovoContacto')}
        >
          <Entypo name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PaginaInicial