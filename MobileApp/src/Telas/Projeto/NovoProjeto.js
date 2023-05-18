import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  TextInput,
  Portal,
  Dialog,
  Provider,
  RadioButton,
  Button,
  FAB
} from "react-native-paper";

import Container from "../../Componentes/Container";
import Input from "../../Componentes/Input";
import Body from "../../Componentes/Body";
import TextOverInput from "../../Componentes/TextOverInput";
import { BASEPROJECTSURL } from "../../Services/URL";
import { Botao } from "../../Componentes/Botao";
import { ScrollView } from "react-native-gesture-handler";


// import { useIsFocused } from '@react-navigation/native-stack';

export default function NovoProjeto() {
  const [tarefas,setTarefas] = useState([])
  const textTask = tarefas.length==0?'Adicione Uma Tarefa a seu Projeto!':'Adicione Mais Tarefas ao seu projeto'
  

  
  return (
    <ScrollView>

    <Container>
      <Body>

        <Text style={styles.Titulo}>Novo Projeto</Text>

        <TextOverInput>Nome do Projeto</TextOverInput>
        <Input
          mode="outlined"
          activeOutlineColor={"#184C78"}
          left={<TextInput.Icon icon="book-edit-outline" />}
        />

        <TextOverInput>Descrição</TextOverInput>
        <TextInput
          mode="outlined"
          activeOutlineColor={"#184C78"}
          multiline={true}
          numberOfLines={5}
          left={<TextInput.Icon icon="checkbook" />}
        />
        <TextOverInput>Prazo de Validade</TextOverInput>
        {/* Muda para compontente data */}
        <Input
          mode="outlined"
          activeOutlineColor={"#184C78"}
          left={<TextInput.Icon icon="calendar-month" />}
        />
        <Button
        style={styles.plusTask}
        
        icon="plus-box-outline">
          {textTask}
        </Button>

        <TextOverInput>Tarefas</TextOverInput>

        {/* Muda para compontente data */}
        <Input
          mode="outlined"
          activeOutlineColor={"#184C78"}
          left={<TextInput.Icon icon="sticker-check" />}
        />
       
      </Body>
    </Container>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  Titulo: {
    fontSize: 22,
    marginTop:10,
    marginTop: 40,
    marginLeft:0,
  },
  viewBtn: {
    alignSelf: "center",
  },
  button: {
    backgroundColor:
      "radial-gradient(50% 50% at 50% 50%, #5C66BD 0%, rgba(133, 177, 228, 0.96) 100%)",
    width: "80%",
    height: 50,
    width: 250,
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  textBtn: {
    fontSize: 18,
  },
  plusTask:{
    marginBottom:-15,
    textAlignVertical: 'center',
    marginLeft:-10,
    fontSize: 16,
    fontWeight: 'bold',
    width:300

  }
});

/*
        { // Configuração Date
          show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display='default'
              onTouchCancel={() => setShow(false)} // Para fechar
              onChange={(event, date) => {
                setShow(false);
                setData(moment(date).format('DD/MM/YYYY'));
              }}
            />
          )}
*/
