import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './src/screens/DetailsScreen';
import ImageScreen from './src/screens/ImageScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
      >
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Details_to_Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
