import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TextOverInput = ({ children }) => {
  return (      
      <Text style={styles.textTitulos}>{children}</Text>
  );
}

const styles = StyleSheet.create({
    textTitulos: {
        marginTop: 14,
        textAlignVertical: 'center',
        marginLeft: 7,
        fontSize: 13,
        marginBottom:4,
        fontStyle:'italic',
        color:'#383F82',
        
      }
});

export default TextOverInput;

