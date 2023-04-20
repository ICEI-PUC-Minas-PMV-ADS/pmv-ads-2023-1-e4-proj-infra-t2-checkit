import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Main from './src/Componentes/Navegações/Main';

export default function App() {
  const [numero,setNumero] = useState(0)
  
 
  return (
    <NavigationContainer>
      <Main/>
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
