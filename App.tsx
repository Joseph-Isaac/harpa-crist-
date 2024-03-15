import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './styles'

import Home from './src/screens/home'
import Music from './src/screens/music'

const App = () => {

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Music' component={Music}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;