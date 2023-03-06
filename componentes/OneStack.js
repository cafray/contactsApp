import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaInicial from '../telas/PaginaInicial';
import EditarContacto from '../telas/EditarContacto';
import NovoContacto from '../telas/NovoContacto';

const Stack = createNativeStackNavigator();

const OneStack = () => {
  return (
    <Stack.Navigator 
     screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="PaginaInicial" component={PaginaInicial}/>
        <Stack.Screen name="NovoContacto" component={NovoContacto}/>
        <Stack.Screen name="EditarContacto" component={EditarContacto}/>
    </Stack.Navigator>
  )
}

export default OneStack