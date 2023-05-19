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
import moment from "moment/moment";
import Container from "../../Componentes/Container";
import Input from "../../Componentes/Input";
import Body from "../../Componentes/Body";
import TextOverInput from "../../Componentes/TextOverInput";
import { BASEPROJECTSURL } from "../../Services/URL";
import { Botao } from "../../Componentes/Botao";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";


// import { useIsFocused } from '@react-navigation/native-stack';

export default function NovoProjeto() {
  const [tarefas,setTarefas] = useState([])
  const textTask = tarefas.length==0?'Adicione Uma Tarefa a seu Projeto!':'Adicione Mais Tarefas ao seu projeto!'
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false); // pop up
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [nomeProjeto,setNomeProjeto]=useState('')
  const [descricao,setDescricao] = useState(''
  )
  const [missInfo, setMissInfo] = useState(false);
  return (
    <ScrollView>

    <Container>
      <Body>

        <Text style={styles.Titulo}>Novo Projeto</Text>

        <View style={styles.viewInput}>
          <TextOverInput>Nome do Projeto</TextOverInput>
          <Input
            mode="outlined"
            value={nomeProjeto}
            onChangeText={(text)=>setNomeProjeto(text)}
            error={missInfo && !nomeProjeto ? true : false}
            activeOutlineColor={"#184C78"}
            left={<TextInput.Icon icon="book-edit-outline" />}
          />
          <TextOverInput>Descrição</TextOverInput>
          
          <TextInput
            mode="outlined"
            activeOutlineColor={"#184C78"}
            multiline={true}
            value={descricao}
            onChangeText={(text)=>setDescricao(text)}
            numberOfLines={5}
            outlineColor="#383F82"
            left={<TextInput.Icon icon="checkbook" />}
          />
          <TextOverInput>Prazo de Validade</TextOverInput>
          {/* Muda para compontente data */}
          <>
                {
          // Configuração Date
          show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onTouchCancel={() => setShow(false)} // Para fechar
              onChange={(event, date) => {
                setShow(false);
                setData(moment(date).format("DD/MM/YYYY"));
              }}
            />
          )
                }
                <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data"
            value={data}
            left={<TextInput.Icon icon="calendar" />}
            editable={false}
          />
                </TouchableOpacity>
              </>
          <TouchableOpacity>
            <Button
            textColor="#383F82"
            style={styles.plusTask}
            
            icon="plus-box-outline">
              {textTask}
            </Button>
          </TouchableOpacity>
          <TextOverInput>Tarefas</TextOverInput>
          {/* Muda para compontente data */}
          <Input
            mode="outlined"
            activeOutlineColor={"#184C78"}
            left={<TextInput.Icon icon="sticker-check" />}
          />
        </View>
       <View style={styles.viewBtn}>
        <TouchableOpacity>
          <Button style={styles.button} textColor="#fff">
            <Text style={styles.textBtn}>Salvar Novo Projeto</Text>
          </Button>
        </TouchableOpacity>
       </View>
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
    marginLeft:13,
 
  },
  viewInput:{
    flex:1,
    width:350,
    alignSelf:'center'
  },
  viewBtn: {
    justifyContent:'center',
    alignItems:'center',
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
    fontStyle:'italic'
  },
  plusTask:{
    marginBottom:-15,
    textAlignVertical: 'center',
    marginLeft:-13,
    marginTop:4,
    fontSize: 16,
    fontWeight: 'normal',

    width:300,
    
    

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
