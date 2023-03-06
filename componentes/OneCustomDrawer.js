import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useOne from '../servicos/OneContexto';
import { useNavigation } from '@react-navigation/native';

export default function OneCustomDrawer(props) {

  const { sair } = useOne();
  const navigation = useNavigation();

  const handleSignOut = () =>{
    sair();
    navigation.navigate('PaginaLogin');
  }

  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView className="bg-black flex-1">
      <DrawerContentScrollView {...props}>
        <View className="space-y-3">
        <TouchableOpacity className="flex-row justify-between items-center px-3">
          <View className="flex-row space-x-5 items-center justify-center">
            <Entypo name="star-outlined" size={24} color="white" />
            <Text className="text-white text-[15px]">Favoritos</Text>
          </View>
            
            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row justify-between items-center px-3"
          onPress={() => handleSignOut()}
        >
          <View className="flex-row space-x-5 items-center justify-center">
            <MaterialCommunityIcons name="logout-variant" size={24} color="white" />
            <Text className="text-white text-[15px]">Sair</Text>
          </View>
            
            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </TouchableOpacity>
        </View>

      </DrawerContentScrollView>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});