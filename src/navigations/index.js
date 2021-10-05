import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Splash, Beranda, Publikasi, PublikasiItem, Infografis, InfografisItem, Kondef } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
  
  const Drawer = createDrawerNavigator();
  const Stack  = createNativeStackNavigator()

  const DrawerNavigation = () => 
      <Drawer.Navigator screenOptions={{drawerPosition: 'right', headerShown: false}}>
        <Drawer.Screen name="Beranda" component={Beranda} />
        <Drawer.Screen name="Publikasi" component={Publikasi} />
        <Drawer.Screen name="Infografis" component={Infografis} />
        <Drawer.Screen name="Konsep & Definisi" component={Kondef} />
      </Drawer.Navigator>

  const AllNavigation = () =>
  <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}} >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    <Stack.Screen name="InfografisItem" component={InfografisItem} />
    <Stack.Screen name="PublikasiItem" component={PublikasiItem} />
  </Stack.Navigator>  

  export default function Navigation() {
    return (
      <NavigationContainer>
       <AllNavigation/>
      </NavigationContainer>
    );
  }