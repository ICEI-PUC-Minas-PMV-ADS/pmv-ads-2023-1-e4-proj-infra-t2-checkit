import React, { useContext, useState } from "react";
import API from "../../Services/webapiservices";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Snackbar } from "react-native-paper";
import { AuthUserContext } from "../../Contexts/AuthUserProvider";
const App = () => {
  const navigation = useNavigation();
  const {postLogin,user,setUser} = useContext(AuthUserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aviso, setAviso] = useState("");
  const [missInfo, setMissInfo] = useState(false);
  const [escondeSenha, setEscondeSenha] = useState(true);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
 
  const onPressLogin = () => {
    
    console.log("funciona");

    if (!email && !password) {
      setMissInfo(true); // Ausência de email e/ou senha
      onToggleSnackBar();
      setAviso("Por favor insira o seu Email e Senha")
      // setAviso("Por favor, insira o email e a senha");
    } else if(email.length==0) {
      onToggleSnackBar();
      setAviso("Por favor insira o seu Email")
    
    } 
    else if(password.length==0){
      onToggleSnackBar();
      setAviso("Por favor insira a sua Senha")
    }
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tire seus projetos do papel com CheckIt!{" "}
      </Text>
      <View style={styles.inputView}>
        <Text style={styles.infoInputText}>E-mail</Text>
        <TextInput
          style={styles.inputText}
          value={email}
          right={<TextInput.Icon icon="email-outline" />}
          placeholderTextColor="#003f5c"
          error={missInfo || (missInfo && !email) ? true : false}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.infoInputText}>Senha</Text>
        <TextInput
          style={styles.inputText}
          error={missInfo || (missInfo && !password) ? true : false}
          secureTextEntry={escondeSenha}
          right={
            <TextInput.Icon
              onPress={() =>
                escondeSenha ? setEscondeSenha(false) : setEscondeSenha(true)
              }
              icon={escondeSenha ? "eye-off" : "eye"}
            />
          }
          placeholderTextColor="#003f5c"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {missInfo && <Text style={styles.aviso}>{aviso}</Text>}
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("CadastroUsuario")}>
        <Text style={styles.signUpText}>
          Ainda não tem uma conta? Cadastre-se!
        </Text>
      </TouchableOpacity>
      <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
          }}
        >
         {aviso}
        </Snackbar>
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
    top: 30,
    padding: 50,
  },
  inputView: {
    width: "80%",
    borderColor: "black",
    backgroundColor: "#ffffff",
    borderRadius: 11,
    height: 50,
    marginBottom: 2,
    justifyContent: "center",
    display: "flex",
  },
  inputText: {
    height: 35,
    marginBottom: 20,
    color: "black",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    padding: 4,
  },
  signUpText: {
    marginBottom: 60,
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
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
  },
  loginText: {
    color: "#ffffff",
  },
  infoInputText: {
    fontSize: 14,
    marginBottom:10,
    marginLeft:3,
  },
});
export default App;
