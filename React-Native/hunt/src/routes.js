import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Main from './pages/Main';
import Product from './pages/Product/product';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerStyle:{ backgroundColor: '#7159c1', }, headerTintColor: '#FFF', headerTitleAlign: 'center' }} >

        <Stack.Screen name="Main" component={Main} options={{ title: 'JShunt' }} />
        <Stack.Screen name="Product" component={Product} options={({ route }) => ({ title: route.params.title })} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default Routes;
