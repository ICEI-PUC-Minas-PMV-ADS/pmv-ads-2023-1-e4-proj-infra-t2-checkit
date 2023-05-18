import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
const App = () => {
  const [state, setState] = useState({
    email: "",
    senha: "",
  });

  const onPressLogin = async () => {
    console.log("funciona");

    if (!email || !senha) {
      setMissInfo(true); // Ausência de email e/ou senha
      onToggleSnackBar();
      setAviso("Por favor, insira o email e a senha");
    } else {
      console.log("hadiosdvfdahspk")
      postLogin({
        email: email,
        senha: senha,
      
      })
        .then((response) => {
          if (response.message == "Usuário não cadastrado") {
            setMissInfo(true); // Infica que o usuário não esta cadastrado
            setAviso("Email ou senha incorretos");
          }
        })
        .catch((e) => console.log(e));
    } // Implementar quando o usuário não for cadastrado
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tire seus projetos do papel com CheckIt! </Text>
      <View style={styles.inputView}>

        <Text style={styles.infoInputText}>E-mail</Text>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />


        <Text style={styles.infoInputText}>Senha</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ senha: text })}
        />
      </View>


      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar </Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.signUpText}>Ainda não tem uma conta? Cadastre-se!</Text>
      </TouchableOpacity>
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
    top:30,
    padding: 50
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
    color: "black",
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    display: "flex"
  },
  signUpText: {
    bottom: 70,
    color: "#505050",
    fontSize: 11,
  },
  forgotText: {
    color: "#505050",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
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
  },
  infoInputText: {
    fontSize: 12
  }
});
export default App;
