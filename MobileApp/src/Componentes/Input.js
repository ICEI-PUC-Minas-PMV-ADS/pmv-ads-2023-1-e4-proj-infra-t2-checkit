import React from 'react'
import { TextInput } from 'react-native-paper'
import { StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput     
      style={styles.input}      
      mode="outlined"
      outlineColor='#383F82'
      {...props}      
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 43,
    fontSize: 16,
    backgroundColor: "#FFFAFA",
    padding:-2,
   
  
  
  }
});

export default Input;