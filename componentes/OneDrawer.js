import { View, Text } from 'react-native'
import React from 'react'
import PaginaLogin from '../telas/PaginaLogin';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import OneStack from './OneStack';

import NovoContacto from '../telas/NovoContacto';
import EditarContacto from '../telas/EditarContacto';
import useOne from '../servicos/OneContexto';
import OneCustomDrawer from './OneCustomDrawer';

const Drawer = createDrawerNavigator();

const OneDrawer = () => {

const { usuarioID } = useOne();

  return (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false
        }} 
        drawerContent={props => <OneCustomDrawer {...props} />}
        >
        {usuarioID ? <Drawer.Screen name="OneStack" component={OneStack}/> : <Drawer.Screen name="PaginaLogin" component={PaginaLogin}/>}  
      
    </Drawer.Navigator>
  )
}

export default OneDrawer