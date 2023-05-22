import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Body from "../../Componentes/Body";
const App = () => {
  const onPressLogin = async () => {
    // Do something about login operation
    console.log("funciona");

    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=gkimsne4yrAAj6jBFaTrAIUn9DxWkRlq4ZGDWqen"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Do something with the data
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors
      });
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira seus dados para iniciar um projeto com CheckIt!</Text>
      <Body>
      <Text style={styles.infoInputText}>Nome</Text>
      <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ nome: text })}
        />
         <Text style={styles.infoInputText}>E-mail</Text>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />
        <Text style={styles.infoInputText} >Senha</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ password: text })}
        />
        <Text style={styles.infoInputText}>Confirmar senha</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ password: text })}
        />
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Estou pronto </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.signUpText}>Já tem uma conta? Login!</Text>
      </TouchableOpacity>
      </Body>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    height: 200,
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
    marginTop: 85,
    padding: 5
  },
  inputView: {
    width: "80%",
    borderColor: "black",
    backgroundColor: "#ffffff",
    borderRadius: 11,
    height: 50,
    marginBottom: 2,
    justifyContent: "center",
    display: "flex"
  },
  inputText: {
    height: 50,
    marginBottom: 20,
    color: "white",
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    display: "flex"
  },
  signUpText: {
    bottom: 70,
    color: "#505050",
    fontSize: 11,
    paddingLeft: 190,
    paddingBottom: 5 
  },
  forgotText: {
    color: "#505050",
    fontSize: 11,
  },
  loginBtn: {
    width: "50%",
    color: "#85B1E4",
    backgroundColor: "#5C66BD",
    borderRadius: 11,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    display: "flex"
  },
  loginText: {
    color: "#ffffff",
    paddingLeft: 115,
    paddingTop: 10
  },
  infoInputText: {
    fontSize: 12
  }
});
export default App;
