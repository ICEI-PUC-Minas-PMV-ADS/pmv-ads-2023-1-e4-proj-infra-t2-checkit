import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert,BackHandler } from "react-native";
import Input from "../../Componentes/Input";

import Body from "../../Componentes/Body";
import { Button,Snackbar } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { baseURL } from "../../Services/URL";
import { token } from "../../Services/URL";
import { TextInput } from "react-native-paper";
import { AuthUserContext } from "../../Contexts/AuthUserProvider";
import { UserContext } from "../../Contexts/UserProvider";
const EditarUsuario = () => {
  const navigation = useNavigation();
  const rota = useRoute()
  const [escondeSenha, setEscondeSenha] = useState(true);
  const [escondeConfirmaSenha, setEscondeConfirmaSenha] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userId, authToken} = useContext(AuthUserContext);
  const {putUsuario} = useContext(UserContext)
  
  const [aviso, setAviso] = useState("");

  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const [missInfo, setMissInfo] = useState(false);




  useEffect(()=>{
    fetch(`${baseURL}/api/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.name)
        setEmail(data.email)
        
      }
       
      )
      .catch((error) => console.error(error));



  if (rota.name === "EditarUsuario") {
    const backAction = () => {
      navigation.goBack()
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }


},[])


  const handleEdit = () => {
    //console.log(`${name}, ${email}, ${password}, ${confirmPassword}`);
    // Validando senha
    if (!password & !confirmPassword) {
      onToggleSnackBar();
      setAviso("Por favor Insira o senha e a confirme!")
      setMissInfo(true);
    }
    else if (!password) {
      onToggleSnackBar();
      setAviso("Por favor Insira a sua nova senha!")
      setMissInfo(true);

    }
    else if (!confirmPassword){
      onToggleSnackBar();
      setAviso("Por favor Insira a confirmação de sua senha!")
      setMissInfo(true);
    }
    else if (password !== confirmPassword){
      onToggleSnackBar();
      setAviso("Senha diferentes, Por favor verifique!")
      setMissInfo(true);
    }
    else{
      const param={
        id:userId,
        name :name,
        email:email,
        password:password.trim()
      }
      putUsuario(userId,param).then(response=>console.log(response)).catch(e=>console.log(e))
     

      navigation.navigate("HomeProjeto")
    }
 
    
  };
   

  return (
    <View style={styles.container}>
      <Body>

        <Text style={styles.title}>
          Editar Minhas informações

        </Text>

        <Text style={styles.infoInputText}>Nome</Text>
        <Input
          disabled={true}
          value={name}
          mode="outlined"
          activeOutlineColor={"#262626"}
            outlineColor={"#262626"}
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
          right={<TextInput.Icon icon="account-circle-outline" />}

        />
        <Text style={styles.infoInputText}>E-mail</Text>
        <Input
          mode="outlined"
          value={email}
          disabled={true}
          activeOutlineColor={"#262626"}
          outlineColor={"#262626"}
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          right={<TextInput.Icon icon="email-outline" />}
        />
        <Text style={styles.infoInputText}>Senha</Text>
        <Input
          mode="outlined"
          value={password}
          activeOutlineColor={"#262626"}
          outlineColor={"#262626"}
          error={missInfo && !password ? true : false}

          secureTextEntry={escondeSenha}
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
          activeOutlineColor={"#262626"}
          outlineColor={"#262626"}
          value={confirmPassword}
          error={missInfo && !confirmPassword ? true : false}

          secureTextEntry={escondeConfirmaSenha}
          placeholderTextColor="#003f5c"
          right={
            <TextInput.Icon
              onPress={() =>
                escondeConfirmaSenha ? setEscondeConfirmaSenha(false) : setEscondeConfirmaSenha(true)
              }
              icon={escondeConfirmaSenha ? "eye-off" : "eye"}
            />
          }
          onChangeText={(confirmPassword) => {
            setConfirmPassword(confirmPassword);
          }}
        />
       
          <View style={styles.viewBtn}>

        <TouchableOpacity onPress={handleEdit}>
          <Button style={styles.loginBtn} textColor="#fff">
            <Text style={styles.textBtn}>Editar </Text>
          </Button>
        </TouchableOpacity>
          </View>
          
          <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={1800}
          
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
    backgroundColor: "#7D8AFF",
    alignItems: "center",
  },
  title: {
    height: 100,
    fontWeight: "bold",
    fontSize: 25,
    color: "#ffffff",
    marginTop: 10,
    marginBottom:5,
    padding: 5,
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
    color: "#505050",
    fontSize: 11,
    paddingLeft: 190,
    paddingBottom: 5,
  },
  forgotText: {
    color: "#505050",
    fontSize: 11,
  },
  loginBtn: {
    width: 140,
    color: "#85B1E4",
    backgroundColor: "#5C66BD",
    borderRadius: 11,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    display: "flex",
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
  textBtn:{
    fontSize:17,

  },
  infoInputText: {
    fontSize: 13,
    fontWeight: "bold",
 
    margin: 6,
  },
});
export default EditarUsuario;
