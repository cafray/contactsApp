import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PaginaLogin from './telas/PaginaLogin';
import PaginaInicial from './telas/PaginaInicial';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OneDrawer from './componentes/OneDrawer';
import { OneProvider } from './servicos/OneContexto';
import OneStack from './componentes/OneStack';

//const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <OneProvider>
      <NavigationContainer>
        <OneDrawer />
      </NavigationContainer>
    </OneProvider>

  );
}


