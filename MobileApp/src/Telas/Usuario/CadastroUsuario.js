import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Input from "../../Componentes/Input";
import { useContext } from "react";
import Body from "../../Componentes/Body";
import { Button, Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { AuthUserContext } from "../../Contexts/AuthUserProvider";
import { UserContext } from "../../Contexts/UserProvider";
import { baseURL } from "../../Services/URL";
const CadastroUsuario = () => {
  const { postLogin, setUser } = useContext(AuthUserContext);
  const { postUsuario, getUsuario } = useContext(UserContext);
  const navigation = useNavigation();

  const [escondeSenha, setEscondeSenha] = useState(true);
  const [escondeConfirmaSenha, setEscondeConfirmaSenha] = useState(true);
  const [name, setName] = useState("dddd");
  const [email, setEmail] = useState("biel@gmail.com");
  const [password, setPassword] = useState("1234");
  const [confirmPassword, setConfirmPassword] = useState("1234");
  const [aviso, setAviso] = useState("");

  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  // Temrinar
  const [missInfo, setMissInfo] = useState(false);

  const handleRegister = async () => {
    console.log(password + "and" + confirmPassword);

    // Validando senha
    if (!name || !email || !password || !confirmPassword) {
      console.log("missinfo");
      setMissInfo(true);
      onToggleSnackBar();
      setAviso("Preencha todos os campos para realizarmos o seu cadastro");
    }
    if (password !== confirmPassword) {
      setMissInfo(true);
      onToggleSnackBar();
      setAviso("Insira senhas iguais");
    } else {
      console.log("Ir para tela inicial");
    }
    fetch(`${baseURL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status == 400) {
          console.log("Oiii")
          onToggleSnackBar();
          setAviso("Email ja cadastrado");
        }
        else{

          navigation.navigate("Login");
        }
      })
      .catch((error) => console.error(error));

    // if(response[0].message =="Usuário ja cadastrado"){
    //
    // }
    // navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>
      <Body>
        <View>
          <Text style={styles.title}>
            Insira seus dados para iniciar um projeto com CheckIt!
          </Text>
        </View>
        <View style={{ marginHorizontal: 25 }}>
          <Text style={styles.infoInputText}>Nome</Text>
          <Input
            mode="outlined"
            outlineColor={"#262626"}
            activeOutlineColor={"#262626"}
            placeholderTextColor="#003f5c"
            value={name}
            onChangeText={(name) => setName(name)}
            right={<TextInput.Icon icon="account-circle-outline" />}
          />
          <Text style={styles.infoInputText}>E-mail</Text>
          <Input
            mode="outlined"
            outlineColor={"#262626"}
            activeOutlineColor={"#262626"}
            placeholderTextColor="#003f5c"
            error={aviso=="Email ja cadastrado" ? true : false}
          
            value={email}
            onChangeText={(email) => setEmail(email)}
            right={<TextInput.Icon icon="email-outline" />}
          />
          <Text style={styles.infoInputText}>Senha</Text>
          <Input
            mode="outlined"
            activeOutlineColor={"#262626"}
            outlineColor={"#262626"}
            secureTextEntry={escondeSenha}
            value={password}
            placeholderTextColor="#003f5c"
            right={
              <TextInput.Icon
                onPress={() =>
                  escondeSenha ? setEscondeSenha(false) : setEscondeSenha(true)
                }
                icon={escondeSenha ? "eye-off" : "eye"}
              />
            }
            onChangeText={(password) => setPassword(password)}
          />
          <Text style={styles.infoInputText}>Confirmar senha</Text>
          <Input
            mode="outlined"
            outlineColor={"#262626"}
            activeOutlineColor={"#262626"}
            value={confirmPassword}
            secureTextEntry={escondeConfirmaSenha}
            placeholderTextColor="#003f5c"
            right={
              <TextInput.Icon
                onPress={() =>
                  escondeConfirmaSenha
                    ? setEscondeConfirmaSenha(false)
                    : setEscondeConfirmaSenha(true)
                }
                icon={escondeConfirmaSenha ? "eye-off" : "eye"}
              />
            }
            onChangeText={(confirmPassword) => {
              setConfirmPassword(confirmPassword);
            }}
          />
          {/* <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>Estou pronto </Text>
          </TouchableOpacity> */}
          <View style={styles.viewBtn}>
            <TouchableOpacity onPress={handleRegister} style={styles.loginBtn}>
              <Text style={styles.textBtn}>Estou pronto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewOr}>
            <Text style={{ color: "#FFF" }}>OU</Text>
          </View>

          <View style={styles.viewText}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signUpText}>Já tem uma conta? Login!</Text>
            </TouchableOpacity>
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
        </View>
      </Body>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    backgroundColor: "#7D8AFF",
  },
  title: {
    height: 140,
    fontWeight: "bold",
    fontSize: 24,
    color: "#000000",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
    padding: 5,
    color: "white",
    letterSpacing: 6.2,
    width: 380,
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
    height: 40,
    marginBottom: 20,
    color: "black",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
  },
  signUpText: {
    bottom: 70,
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
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
  loginText: {
    color: "#ffffff",
    paddingLeft: 115,
    paddingTop: 10,
  },
  viewBtn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  viewOr: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: -10,
  },
  viewText: {
    width: 320,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  textBtn: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  infoInputText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    margin: 8,
  },
});
export default CadastroUsuario;
