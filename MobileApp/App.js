import axios, { Axios } from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {





  
  const chamar = async()=>{
    await fetch(`http://10.0.0.2:7246/api/tarefas/64444b41c8149f83725d2441`,
    {
      method: 'GET',      
    }
  )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={chamar}>
      <Text>Open up App.js to start working on your app!</Text>
  
      </TouchableOpacity>

  
      <StatusBar style="auto" />
    </View>
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
