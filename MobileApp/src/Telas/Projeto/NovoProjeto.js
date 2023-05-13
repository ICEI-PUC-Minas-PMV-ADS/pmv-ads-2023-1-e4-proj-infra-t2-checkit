import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Container from "../../Componentes/Container";
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

      <Text>Novo Projeto</Text>



      <Button onPress={() => getTarefa('64443d0709601a8510eb6f5b')} title="Get!" />
    </Container>



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});