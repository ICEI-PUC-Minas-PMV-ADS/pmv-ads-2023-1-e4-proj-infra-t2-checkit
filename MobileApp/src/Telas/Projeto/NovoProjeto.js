import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  TextInput,
  Portal,
  Provider,
  RadioButton,
  Button,
  FAB,
  List,
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

import Dialog from "react-native-dialog";

// import { useIsFocused } from '@react-navigation/native-stack';

export default function NovoProjeto() {
  const [tarefas, setTarefas] = useState([]);

  const [inputTarefas, setInputTarefas] = useState("");

  const textTask =
    tarefas.length == 0
      ? "Adicione Uma Tarefa a seu Projeto!"
      : "Adicione Mais Tarefas ao seu projeto!";
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false); // pop up
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [isEditing, setIsEditing] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [missInfo, setMissInfo] = useState(false);

  const DATA = [
    {
      id: "1",
      title: "Fiarst Item",
    },
    {
      id: "2",
      title: "Firsst Item",
    },
    {
      id: "3",
      title: "Fifrst Item",
    },
    {
      id: "b4",
      title: "Fgfirst Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Firfsst Item",
    },
  ];
  useEffect(() => {
    setInputTarefas("");
  }, [tarefas]);

  const createProject = async () => {
    console.log(tarefas);
  };
  const addTask = () => {
    tarefas.push(inputTarefas);

    setShowDialog(false);
    setInputTarefas("");
  };
  const deleteTask = (tarefa) => {
    const newListTask = tarefas.filter((task) => tarefa != task);

    setTarefas(newListTask);
  };
  const editTask = (tarefa) => {
    setShowDialog(true);
    setIsEditing(true);
    setInputTarefas(tarefa);

    const index = tarefas.findIndex((task) => task == tarefa);
    tarefas[index] = s;
  };

  return (
    <Container>
      <Body>
        <Text style={styles.Titulo}>Novo Projeto</Text>

        <View style={styles.viewInput}>
          <TextOverInput>Nome do Projeto</TextOverInput>
          <Input
            mode="outlined"
            value={nomeProjeto}
            onChangeText={(text) => setNomeProjeto(text)}
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
            onChangeText={(text) => setDescricao(text)}
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
          <TouchableOpacity onPress={() => setShowDialog(true)}>
            <Button
              textColor="#383F82"
              style={styles.plusTask}
              icon="plus-box-outline"
            >
              {textTask}
            </Button>
          </TouchableOpacity>
          {tarefas.length > 0 && (
            <TextOverInput>
              {tarefas.length == 1
                ? "Tarefa Deste Projeto :"
                : "Tarefas Deste Projeto :"}
            </TextOverInput>
          )}

          {/* Muda para compontente data */}
          <Dialog.Container
            visible={showDialog}
            onRequestClose={() => setShowDialog(false)}
          >
            <Dialog.Title>Tarefa</Dialog.Title>
            <Dialog.Description>Digite o nome da sua Tarefa</Dialog.Description>

            <Dialog.Input
              onChangeText={(text) => setInputTarefas(text)}
              value={inputTarefas}
            />

            <Dialog.Button
              label="Cancelar"
              onPress={() => setShowDialog(false)}
            />
            <Dialog.Button
              label={`Adicionar Tarefa`}
              onPress={() => addTask()}
            />
          </Dialog.Container>

          <ScrollView scrollEnabled={tarefas.length > 2 ? true : false}>
            {tarefas.map((x, y) => (
              <View style={styles.itensList}>
                <List.Icon icon={"notebook-edit"} />

                <Text key={y} style={styles.taskItens}>
                  {x}
                </Text>
                <TouchableOpacity onPress={() => setIsEditing(x)}>
                  <List.Icon
                    style={{ marginLeft: 170 }}
                    icon={"notebook-edit-outline"}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(x)}>
                  <List.Icon style={{ marginLeft: 20 }} icon={"trash-can"} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity onPress={createProject}>
            <Button style={styles.button} textColor="#fff">
              <Text style={styles.textBtn}>Salvar Novo Projeto</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </Body>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  Titulo: {
    fontSize: 22,
    marginTop: 10,
    marginTop: 40,
    marginLeft: 13,
  },
  viewInput: {
    flex: 1,
    width: 350,
    alignSelf: "center",
  },
  viewBtn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#85B1E4",
    width: "80%",
    height: 50,
    width: 250,
    borderRadius: 12,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 30,
  },
  textBtn: {
    fontSize: 18,
    fontStyle: "italic",
  },
  plusTask: {
    marginBottom: -15,
    textAlignVertical: "center",
    marginLeft: -13,
    marginTop: 7,
    fontSize: 16,
    fontWeight: "normal",

    width: 300,
  },
  itensList: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: "row",
  },
  taskItens: {
    marginLeft: 20,
    marginVertical: 2,
  },
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
