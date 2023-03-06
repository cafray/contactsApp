import { View, Text } from 'react-native'
import React from 'react'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const OneCustomDrawer = () => {

  return (

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Teste"
        onPress={() => Linking.openURL('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>

  )
}

export default OneCustomDrawer