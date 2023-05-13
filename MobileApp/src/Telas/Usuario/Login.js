import React, { useState } from "react";
import API from "../../Services/webapiservices";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
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
      <Text style={styles.title}>Tire seus projetos do papel com CheckIt!</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ email: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ password: text })}
        />
      </View>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={styles.signUpText}>Ainda não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000000",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    borderColor: "black",
    backgroundColor: "#ffffff",
    borderRadius: 11,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  signUpText: {
    padding: 45,
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
  },
  loginText: {
    color: "#ffffff",
  },
});
export default App;
