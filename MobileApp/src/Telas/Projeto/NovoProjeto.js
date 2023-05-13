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
import TextOverInput from "../../Componentes/TextOverInput";
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

    <TextOverInput >Nome do Projeto</TextOverInput>
    <Input
      mode="outlined"
      activeOutlineColor={"#184C78"}
      left={<TextInput.Icon icon='book-edit-outline'/>}
    />
    <TextOverInput >Descrição</TextOverInput>
    <TextInput
      mode="outlined"
      activeOutlineColor={"#184C78"}
      multiline={true}
      numberOfLines={5}
      left={<TextInput.Icon icon='checkbook'/>}
    />
    <TextOverInput>Prazo de Validade</TextOverInput>

    <TextInput
      mode="outlined"
      activeOutlineColor={"#184C78"}
   
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



  
});