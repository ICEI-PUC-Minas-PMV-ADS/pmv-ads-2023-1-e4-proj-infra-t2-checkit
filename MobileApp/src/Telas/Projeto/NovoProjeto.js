import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  BackHandler
} from "react-native";
import { TextInput, Button, List ,Snackbar} from "react-native-paper";
import moment from "moment/moment";
import Container from "../../Componentes/Container";
import Input from "../../Componentes/Input";
import Body from "../../Componentes/Body";
import TextOverInput from "../../Componentes/TextOverInput";

import DateTimePicker from "@react-native-community/datetimepicker";

import Dialog from "react-native-dialog";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProjectContext } from "../../Contexts/ProjectsProvider";
import { useNavigation,useIsFocused,useRoute } from "@react-navigation/native";
import { TaskContext } from "../../Contexts/TaskProvider";
import { set } from "react-native-reanimated";

export default function NovoProjeto({ route }) {
  const { item } = route.params ? route.params : {};
  const focused = useIsFocused();
  const rota = useRoute();

  const navigation = useNavigation();
  const { idTasks,task, getTaskFromProject, postTask, getTask ,deleteTask} =
    useContext(TaskContext);
  const { postProject, getProject, putProject } = useContext(ProjectContext);
  const[guard,setGuard] = useState(0)
  const [tarefas, setTarefas] = useState([]);
  const [inputTarefas, setInputTarefas] = useState("");
  const [tituloTarefa, setTituloTarefa] = useState();
  const [aviso, setAviso] = useState("");

  const textTask =
    task.length == 0
      ? "Adicione Uma Tarefa a seu Projeto!"
      : "Adicione Mais Tarefas ao seu projeto!";
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false); // pop up
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));
  const [title, setTitle] = useState("");
  const [descricao, setDescricao] = useState(!item?"":item.descricao);
  const [isEditing, setIsEditing] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [missInfo, setMissInfo] = useState(false);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  useEffect(() => {
    setInputTarefas("");
  }, [task]);

  useEffect(() => {
  
  }, [guard]);
  useEffect(() => {
  
  },[idTasks]);
  useEffect(() => {
    // console.log(item.descricao)
    if (rota.name === "NovoProjeto") {
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
  },[]);
 
  const HandleDeleteTask = (id) => {
    console.log(guard)
    deleteTask(id).then().catch()
    setGuard(guard+1)
  };

  // const editTask = (tarefa) => {
  //   setShowDialog(true);
  //   setIsEditing(true);
  //   setInputTarefas(tarefa);

  //   const index = tarefas.findIndex((task) => task == tarefa);
  //   tarefas[index] = s;
  // };

  useEffect(() => {
    // Se vier dados da rota
    if (item) {
      setTitle(item.title);
      setDescricao(item.descricao);
      setDate(item.dueDate);
      console.log(item.tarefaId)
    }
  }, [item]);

  const handleProject = () => {
    console.log(date)
    if(!title || !date|| !descricao){
      setMissInfo(true);
      onToggleSnackBar();
      setAviso("Favor insira todas a Informações para criação do seu projeto")


    }
    else{

      const param = {
        title: title.trim(),
        dueDate: date,
        status: "Em Andamento",
        tarefaId: idTasks,
        userId: "648b8b47a571e0b8cffb5061",
      };
  
      postProject(param).then();
      navigation.navigate("HomeProjeto");
      
    };
    }

  const handleTask = (projectId) => {

console.log(guard)
     const param = {
       tituloTarefa: tituloTarefa.trim(),
       status:false,
     };

   

     const a =  postTask(param).then().catch(e=>console.log(e));
      setGuard(guard+1)

    setShowDialog(false);
    setInputTarefas("");

    //getTaskFromProject(projectId).then();
  };

  const renderItem = ({ item }) => (
    <SafeAreaView>
    <ScrollView>
    

          <View style={styles.itensList}>
          <List.Icon icon={"notebook-edit"} />

          <Text  style={styles.taskItens}>
            {item.tituloTarefa}
          </Text>
          <TouchableOpacity onPress={() => setIsEditing(item.id)}>
            <List.Icon
              style={{ marginLeft: 170 }}
              icon={"notebook-edit-outline"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandleDeleteTask(item.id)}>
            <List.Icon style={{ marginLeft: 20 }} icon={"trash-can"} />
          </TouchableOpacity>
        </View>
  
    </ScrollView>
    </SafeAreaView>
        
  


          

  );
  return (
    <Container>
      <Body>
        <Text style={styles.Titulo}>{item ? item.title : "Novo Projeto"}</Text>

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
            error={missInfo && !descricao ? true : false}

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
                  error={missInfo && !date ? true : false}

                  mode={"date"}
                  is24Hour={true}
                  display="default"
                  themeVariant="dark"
                  onTouchCancel={() => setShow(false)} // Para fechar
                  onChange={(event, date) => {
                    setShow(false);
                    setData(date.format("DD/MM/YYYY"));
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
              onPress={() => handleTask()}
            />
          </Dialog.Container>
          
            <FlatList
          data={task}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
   <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={1500}
          action={{
            label: "Ok",
          }}
        >
          {aviso}
        </Snackbar>
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
