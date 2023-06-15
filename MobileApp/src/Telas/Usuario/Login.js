import React, { useContext, useState } from "react";
import API from "../../Services/webapiservices";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Snackbar } from "react-native-paper";
import { AuthUserContext } from "../../Contexts/AuthUserProvider";
import Container from "../../Componentes/Container";
import Body from "../../Componentes/Body";
const Login = () => {
  const navigation = useNavigation();
  const { postLogin, user, setUser } = useContext(AuthUserContext);

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
   postLogin({
    email:email,
    senha:password
   }).then(a=>console.log(a))





    
    // if (!email && !password) {
    //   setMissInfo(true); // Ausência de email e/ou senha
    //   onToggleSnackBar();
    //   setAviso("Por favor insira o seu Email e Senha");
    //   // setAviso("Por favor, insira o email e a senha");
    // } else if (email.length == 0) {
    //   onToggleSnackBar();
    //   setAviso("Por favor insira o seu Email");
    // } else if (password.length == 0) {
    //   onToggleSnackBar();
    //   setAviso("Por favor insira a sua Senha");
    // }
  };

  return (
    <View style={styles.container}>
      <Body>
        <View style={styles.viewLogo}>
          <Image
            style={styles.logo}
            source={require("../../../assets/Logos/logo_transparent.png")}
          />
          <View style={{ marginHorizontal: 25 }}>
            <Text style={styles.infoInputText}>E-mail</Text>
            <TextInput
              mode="outlined"
              outlineColor="#262626"
              activeOutlineColor="#262626"
              style={styles.inputText}
              value={email}
              right={<TextInput.Icon icon="email-outline" />}
              placeholderTextColor="#003f5c"
              error={missInfo || (missInfo && !email) ? true : false}
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.infoInputText}>Senha</Text>
            <TextInput
              mode="outlined"
              outlineColor={"#262626"}
              style={styles.inputText}
              activeOutlineColor="#262626"
              error={missInfo || (missInfo && !password) ? true : false}
              secureTextEntry={escondeSenha}
              right={
                <TextInput.Icon
                  onPress={() =>
                    escondeSenha
                      ? setEscondeSenha(false)
                      : setEscondeSenha(true)
                  }
                  icon={escondeSenha ? "eye-off" : "eye"}
                />
              }
              placeholderTextColor="#003f5c"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          {missInfo && <Text style={styles.aviso}>{aviso}</Text>}
          <View style={styles.viewButton}>
            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
              <Text style={styles.loginText}>Entrar </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewAvisoCadastro}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CadastroUsuario")}
            >
              <Text style={styles.signUpText}>
                Ainda não tem uma conta? Cadastre-se!
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Ok",
          }}
        >
          {aviso}
        </Snackbar>
      </Body>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#7D8AFF",
  },
  viewLogo: {
    marginBottom: -20,
    marginTop: 70,
  },
  logo: {
    height: 190,
    width: 170,
    padding: 10,
    marginBottom: 0,
    marginTop: 0,
    alignSelf: "center",
  },

  title: {
    height: 200,
    width: 450,
    fontWeight: "bold",
    fontSize: 25,
    color: "#ffff",
    marginTop: -200,
    top: 30,
    padding: 50,
    letterSpacing: 5,
    marginLeft: 30,
  },
  inputView: {
    width: "80%",
    borderRadius: 11,
    height: 50,
    marginBottom: 2,
    justifyContent: "center",
    display: "flex",
  },
  inputText: {
    height: 35,
    marginBottom: 15,
    color: "black",
    borderRadius: 5,
    padding: 4,
  },
  signUpText: {
    marginBottom: 60,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
  forgotText: {
    color: "#505050",
    fontSize: 11,
  },
  loginBtn: {
    width: 140,
    color: "#85B1E4",
    backgroundColor: "#FEC044",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  viewButton: {
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  loginText: {
    color: "#ffffff",
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 16,
  },
  infoInputText: {
    fontSize: 14,
    color: "white",
    marginBottom: 10,
    marginLeft: 3,
    fontWeight: "bold",
  },
  aviso: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "#D32F2F",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
export default Login;
