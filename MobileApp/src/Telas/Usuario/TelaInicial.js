import { useState } from "react";
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MeuPerfil() {
  const [numero, setNumero] = useState(0);

  const add = () => {
    setNumero(numero + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.salutation}>Bem vindo, Fulano!</Text>
        <TouchableOpacity onPressOut={add}>
            <Text style={styles.title}>Você tem {numero} projetos em andamento!</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.AddProject}>
            <Icon  name="plus" style={styles.plusIcon} size={35}/>
            <Text style={styles.loginText}>Adicione um projeto!</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    height: 200,
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
    marginTop: 2,
    bottom: 160,
    padding: 10,
    right: 30
  },

    salutation: {
     height: 200,
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
    marginTop: 2,
    top: 1,
    padding: 5,
    right: 60
  },
  AddProject: {
    width: "80%",
    color: "#85B1E4",
    backgroundColor: "#5C66BD",
    borderRadius: 11,
    height: 200,
    bottom: 200,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  loginText: {
    color: "white",
    bottom: 80,
    fontSize: 20
  },
  plusIcon: {
    color: "white",
    padding: 20,
    top: 30
  }
});
