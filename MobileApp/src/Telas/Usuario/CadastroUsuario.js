import axios from "axios";
import { useState,useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function CadastroUsuario() {
  const [numero, setNumero] = useState(0);
  const[bairro,setBairro]=useState('')
  const [cidade,setCidade]=useState()
  const[rua,setRua] = useState()
  const[uf,setUf]= useState()
  const [cep,setCep]= useState("")
  // API: Buscar o Cep
  useEffect(() => {
    buscarEndereco();
  }, [cep]);

  
  const buscarEndereco = () => {
    console.log(cep)
    const Cep = (e) => {
      if (String(cep).length == 8) {
        const meuCep = String(cep);

        const value = meuCep.replace(/[^0-9]+/, meuCep);
        const url = `https://viacep.com.br/ws/${value}/json/`;

        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            if (json.logradouro) {
              setBairro(json.bairro);
              setCidade(json.localidade);
              setRua(json.logradouro);
              setUf(json.uf)
            }
          });
      }
    };
    Cep();
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity >
        <Text>{numero} asdasd </Text>

        <TextInput value={cep} onChangeText={setCep}/>
        <TextInput value={cidade}/>
        <TextInput value={bairro}/>
        <TextInput value={uf}/>
        <TextInput value={rua}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={buscarEndereco}>
        
        <Text>asfasdfas</Text>

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
});
