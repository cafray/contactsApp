import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect} from 'react'
import CampoTexto from '../componentes/CampoTexto'
import { Ionicons } from '@expo/vector-icons';
import ContactoSingular from '../componentes/ContactoSingular';
import { useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useOne from '../servicos/OneContexto';

const PaginaInicial = () => {

  const { contactos, listarContacto } = useOne();

    const navigation = useNavigation();

    useLayoutEffect(() => {
       listarContacto();
       // console.log(contactos);
     }, []);

  return (
    <View className="bg-[#111111] flex-1 pt-5 ">
      <View className="flex-row bg-[#1E1E1E] mx-2 rounded-xl">
        <TouchableOpacity className="flex-3 px-3 items-center justify-center"
            onPress={() => {navigation.openDrawer()}}
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
      <View className="flex-1">
        <FlatList 
            data={contactos}
            numColumns= {1}
            renderItem={({item}) =><TouchableOpacity 
              onPress={()=>navigation.navigate('EditarContacto',item)}
            >
              <ContactoSingular item={item}/>
              </TouchableOpacity>}
            keyExtractor={item => item.id}
          />
          
      </View>
       
      
    </View>
  )
}

export default PaginaInicial

const styles = StyleSheet.create({})