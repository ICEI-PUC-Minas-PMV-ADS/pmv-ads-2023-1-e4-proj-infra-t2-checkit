import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Button, List } from "react-native-paper";
import moment from "moment/moment";
import Container from "../../Componentes/Container";
import Input from "../../Componentes/Input";
import Body from "../../Componentes/Body";
import TextOverInput from "../../Componentes/TextOverInput";

import DateTimePicker from "@react-native-community/datetimepicker";

import Dialog from "react-native-dialog";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProjectContext } from "../../Contexts/ProjectsProvider";
import { useNavigation } from "@react-navigation/native";
import { TaskContext } from "../../Contexts/TaskProvider";

export default function NovoProjeto({ route }) {
  const { item } = route.params ? route.params : {};
  const navigation = useNavigation();
  const { task, getTaskFromProject, postTask } = useContext(TaskContext);

  const [tarefas, setTarefas] = useState([]);
  const [inputTarefas, setInputTarefas] = useState("");
  const [tituloTarefa, setTituloTarefa] = useState();

  const textTask =
    tarefas.length == 0
      ? "Adicione Uma Tarefa a seu Projeto!"
      : "Adicione Mais Tarefas ao seu projeto!";
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false); // pop up
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [title, setTitle] = useState("");
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

  // const createProject = async () => {
  //   console.log(tarefas);
  // };
  // const addTask = () => {
  //   tarefas.push(inputTarefas);

  //   setShowDialog(false);
  //   setInputTarefas("");
  // };
  const deleteTask = (tarefa) => {
    const newListTask = tarefas.filter((task) => tarefa != task);

    setTarefas(newListTask);
  };
  // const editTask = (tarefa) => {
  //   setShowDialog(true);
  //   setIsEditing(true);
  //   setInputTarefas(tarefa);

  //   const index = tarefas.findIndex((task) => task == tarefa);
  //   tarefas[index] = s;
  // };

  const { project, postProject } = useContext(ProjectContext);

  useEffect(() => {
    // Se vier dados da rota
    if (item) {
      setTitle(item.title);
      setDescricao(item.descricao);
      setDate(item.dueDate);
    }
  }, [item]);

  const handleProject = () => {
    const param = {
      title: title.trim(),
      dueDate: new Date(),
      status: "Em Andamento",
      tarefaId: [],
      userId: "648b8b47a571e0b8cffb5061",
    };

    postProject(param).then();
    navigation.navigate("HomeProjeto");
  };

  const handleTask = (projectId) => {
    console.log(projectId);

    const param = {
      links: [],
      tituloTarefa: tituloTarefa,
      descricao: "Minhas Task",
      dataInicio: new Date(),
      dataVencimento: "2023-06-18T18:10:36.210Z",
      prioridade: 0,
    };

    postTask(param).then();

    setShowDialog(false);
    setInputTarefas("");
    //getTaskFromProject(projectId).then();
  };

  return (
    <Container>
      <Body>
        <Text style={styles.Titulo}>{item ? "Projeto" : "Novo Projeto"}</Text>

        <View style={styles.viewInput}>
          <TextOverInput>Nome do Projeto</TextOverInput>
          <Input
            mode="outlined"
            value={title}
            onChangeText={(text) => setTitle(text)}
            error={missInfo && !title ? true : false}
            activeOutlineColor={"#262626"}
            left={<TextInput.Icon icon="book-edit-outline" />}
          />
          <TextOverInput>Descrição</TextOverInput>

          <TextInput
            mode="outlined"
            activeOutlineColor={"#262626"}
            multiline={true}
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            numberOfLines={5}
            outlineColor="#262626"
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
            <TouchableOpacity
              disabled={item ? true : false}
              onPress={() => setShow(true)}
            >
              <Input
                label="Data"
                value={data}
                disabled={item ? true : false}
                left={<TextInput.Icon icon="calendar" />}
                editable={false}
              />
            </TouchableOpacity>
          </>
          <TouchableOpacity onPress={() => setShowDialog(true)}>
            <Button
              textColor="#fff"
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
              color="#000"
              onChangeText={(text) => setTituloTarefa(text)}
              //value={tituloTarefa}
            />

            <Dialog.Button
              label="Cancelar"
              onPress={() => setShowDialog(false)}
            />
            <Dialog.Button
              label={`Adicionar Tarefa`}
              // onPress={() => addTask()}
              onPress={() => handleTask(item.id)}
            />
          </Dialog.Container>
          <SafeAreaView>
            <ScrollView>
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
          </SafeAreaView>
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity onPress={handleProject}>
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
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#FEC044",
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
    fontWeight: "bold",
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
