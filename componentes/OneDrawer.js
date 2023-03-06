import { View, Text } from 'react-native'
import React from 'react'
import PaginaLogin from '../telas/PaginaLogin';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OneStack from './OneStack';

import NovoContacto from '../telas/NovoContacto';
import EditarContacto from '../telas/EditarContacto';

const Drawer = createDrawerNavigator();

const OneDrawer = () => {
  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
        <Drawer.Screen name="PaginaLogin" component={PaginaLogin}/>
        <Drawer.Screen name="EditarContacto" component={EditarContacto}/>
        <Drawer.Screen name="NovoContacto" component={NovoContacto}/>
        
        <Drawer.Screen name="OneStack" component={OneStack}/>
    </Drawer.Navigator>
  )
}

export default OneDrawer