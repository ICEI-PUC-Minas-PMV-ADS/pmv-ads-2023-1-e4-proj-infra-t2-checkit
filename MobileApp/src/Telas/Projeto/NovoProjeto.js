import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  TextInput,
  Portal,
  Dialog,
  Provider,
  RadioButton,
  
} from "react-native-paper";

import Container from "../../Componentes/Container";
import Input from "../../Componentes/Input";
import Body from "../../Componentes/Body";
// import { useIsFocused } from '@react-navigation/native-stack';

export default function NovoProjeto() {

  // const isFocused = useIsFocused();    
  // TESTES
  //'https://10.0.2.2:5278/
  const getTarefa = async (id) => {
    console.log('id Tarefa: ' + id);
    return await fetch(`https://localhost:5278/api/Tarefas/${id}`),
      {
        method: 'GET',
       
      }
        .then(response => response.json())
        .then(json => console.log('json' + json))
        .catch(error => console.error(error));
  }

  // useEffect(() => {
  //  // console.log('Entrou Effect')
  //   //getTarefa('64443d0709601a8510eb6f5b').then();
  // }, [isFocused])


  return (
    <Container>
      <Body>

 
      <Text style={styles.Titulo}>Novo Projeto</Text>

    <Text style={styles.textTitulos}>Nome do Projeto</Text>
    <Input
      mode="outlined"
      activeOutlineColor={"#3d9d74"}
      left={<TextInput.Icon icon='book-edit-outline'/>}
    />
    <Text style={styles.textTitulos}>Descrição</Text>
    <TextInput
      mode="outlined"
      activeOutlineColor={"#3d9d74"}
      multiline={true}
      numberOfLines={5}
      left={<TextInput.Icon icon='checkbook'/>}
    />
    <Text style={styles.textTitulos}>Prazo de Validade</Text>

    <TextInput
      mode="outlined"
      activeOutlineColor={"#3d9d74"}
   
      left={<TextInput.Icon icon='calendar-month'/>}
    />
      <Button onPress={() => getTarefa('64443d0709601a8510eb6f5b')} title="Get!" />
      </Body>
    </Container>



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  Titulo:{
    fontSize:20




  },



  textTitulos: {
    marginTop: 14,
    textAlignVertical: 'center',
    marginLeft: 14,
    fontSize: 16,
    fontWeight: 'bold'
  }
});