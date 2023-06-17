import { Profiler, useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { List, Checkbox, Card } from "react-native-paper";
import Container from "../../Componentes/Container";
import Body from "../../Componentes/Body";
import { Botao } from "../../Componentes/Botao";
import { ProgressBar } from "../../Componentes/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import API from "../../Services/webapiservices";
import { URLTASK } from "../../Services/URL";
import { combineTransition } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { baseURL } from "../../Services/URL";
import { ProjectContext } from "../../Contexts/ProjectsProvider";

const item = [
  {
    id: "646559d730418929632cee6c",
    title: "Reformar Casa",
    createdAt: "2023-05-17T22:48:55.604Z",
    createdBy: "",
    updatedAt: "2023-05-17T22:48:55.604Z",
    updatedBy: "",
    status: "Em Andamento",
    dueDate: "2023-05-17T22:43:44.243Z",
    members: null,
    tarefaId: ["64655877d423bfb671802d70", "64655877d423bfb671802d10"],
    userId: null,
  },
  {
    id: "646559d730418929632cef6c",
    title: "Estudar Inglês",
    createdAt: "2023-05-17T22:48:55.604Z",
    createdBy: "",
    updatedAt: "2023-05-17T22:48:55.604Z",
    updatedBy: "",
    status: "Em Andamento",
    dueDate: "2023-05-17T22:43:44.243Z",
    members: null,
    tarefaId: ["64655877d423bfb671812d11", "64655877d423bfb671812d12"],
    userId: null,
  },
];

const tasks = [
  {
    id: "64655877d423bfb671802d70",
    tituloTarefa: "Comprar Tijolo",
    descricao: "Depósito São Miguel",
    dataInicio: "2023-04-22T18:35:05.334Z",
    dataVencimento: "2023-04-22T18:35:05.334Z",
    prioridade: 0,
    status: "Completa",
    isChecked: true,
  },
  {
    id: "64655877d423bfb671802d10",
    tituloTarefa: "Comprar Bolsa",
    descricao: "Depósito São Miguel",
    dataInicio: "2023-04-22T18:35:05.334Z",
    dataVencimento: "2023-04-22T18:35:05.334Z",
    prioridade: 0,
    status: "Completa",
    isChecked: false,
  },
  {
    id: "64655877d423bfb671812d11",
    tituloTarefa: "Comprar livros",
    descricao: "Depósito São Miguel",
    dataInicio: "2023-04-22T18:35:05.334Z",
    dataVencimento: "2023-04-22T18:35:05.334Z",
    prioridade: 0,
    status: "Não iniciada",
    isChecked: false,
  },
  {
    id: "64655877d423bfb671812d12",
    tituloTarefa: "Comprar Caderno",
    descricao: "Depósito São Miguel",
    dataInicio: "2023-04-22T18:35:05.334Z",
    dataVencimento: "2023-04-22T18:35:05.334Z",
    prioridade: 0,
    status: "Não iniciada",
    isChecked: false,
  },
];

export default function HomeProjeto() {
  const navigation = useNavigation();
  const { project, getProject } = useContext(ProjectContext);

  useEffect(() => {
    // getProject().then().catch();
  }, []);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2NDhiOGI0N2E1NzFlMGI4Y2ZmYjUwNjEiLCJuYmYiOjE2ODcwMzA5MjksImV4cCI6MTY4NzA1OTcyOSwiaWF0IjoxNjg3MDMwOTI5fQ.s6uaX3MuGVxutLlfH_2ABXCu9w9pkzy71lW6Q40TN_s";

  // Testes API
  useEffect(() => {
    const getAllProjects = async (userId) => {
      // console.log(
      //   `${baseURL}/api/projects/GetAllProjectsThisUserAsync/${userId}`
      // );
      //console.log(token)
      return await fetch(
        `${baseURL}/api/projects/getAllProjectsThisUser/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    };
    getAllProjects();

    //   // GET id
    //   const getProject = async (id) => {
    //     console.log(`${baseURL}/api/projects/${id}`);
    //     return await fetch(`${baseURL}/api/projects/${id}`, {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => console.log(data))
    //       .catch((error) => console.error(error));
    //   };
    //   // getProject("648b95c03661951d2e855f49");
    //   // const param = {
    //   //   title: "Consertar Som Aiwa",
    //   //   dueDate: new Date(),
    //   //   status: "Finalizado",
    //   //   tarefaId: [],
    //   //   userId: "648b8b47a571e0b8cffb5061",
    //   // };
    //   // const postProject = async (param) => {
    //   //   console.log("param: " + JSON.stringify(param));
    //   //   return await fetch(`${baseURL}/api/projects/`, {
    //   //     method: "POST",
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //       Authorization: `Bearer ${token}`,
    //   //     },
    //   //     body: JSON.stringify(param),
    //   //   })
    //   //     .then((response) => response.json())
    //   //     .then((json) => console.log(json))
    //   //     .catch((e) => console.error(e));
    //   // };
    //   // //postProject(param);
    //   // PUT
    //   const putProject = async (id, param) => {
    //     return await fetch(`${baseURL}/api/projects/${id}`, {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(param),
    //     })
    //       .then((response) => console.log(response.status))
    //       .catch((error) => console.error(error));
    //   };
    //   //putProject("648b95c03661951d2e855f49", param);
    //   // DELETE
    //   const deleteProject = async (id) => {
    //     return await fetch(`${baseURL}/api/projects/${id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then((response) => console.log(response.status))
    //       .catch((error) => console.error(error));
    //   };
    //   //deleteProject("6488dbc9500ac58c938de768");
  }, []);

  const [task, setTask] = useState(tasks);
  const [test, setTest] = useState();

  const handleChange = (id) => {
    //console.log(id);
    let temp = task.map((task) => {
      if (id === task.id) {
        //task.isChecked == true;
        console.log(task.id, task.isChecked);
        return { ...task, isChecked: !task.isChecked };
      }
      //console.log("-->" + task.tituloTarefa);
      return task;
    });
    setTask(temp);
  };

  const handleFilterTask = (task) => {};

  // Renderiza accordion
  const handleTask = (tarefa, projetoTarefaId) => {
    const arr = [];
    // console.log(projetoTarefaId)
    // projetoTarefaId.forEach((projetoTarefaId) => {
    //   tarefa.map((tarefa) => {
    //     if (tarefa.id == projetoTarefaId) {
    //       arr.push(tarefa);
    //       // setTest(tarefa);
    //     }
    //   });
    // });
    //console.log(test.id);

    return (
      <FlatList
        data={task}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <Pressable onPress={() => handleChange(item.id)}>
                  <MaterialCommunityIcons
                    name={
                      item.isChecked
                        ? "checkbox-marked"
                        : "checkbox-blank-outline"
                    }
                    size={24}
                    color="#000"
                  />
                </Pressable>
                <Text>{item.tituloTarefa}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };

  const handleExcluir = (item) => {
    console.log("Excluir Item");
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewCard}>
      <List.Item
        title={<Text style={styles.nomeProjeto}>{item.title}</Text>}
        description={
          <View>
            <Text style={styles.textList}>{item.descricao}</Text>
            <Text>Vence 01/01/2001</Text>
            {/* <ProgressBar progresso={20} />  */}
            <View style={styles.viewProgressBar}>
              <ProgressBar progresso={10} />
            </View>
          </View>
        }
        right={(props) => (
          <>
            <TouchableOpacity onPress={() => handleExcluir(item)}>
              <List.Icon {...props} icon="trash-can" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("NovoProjeto", { item })}
            >
              <List.Icon {...props} icon="lead-pencil" />
            </TouchableOpacity>
          </>
        )}
      />
      <List.Section>
        <List.Accordion
          title="Tarefas"
          left={(props) => <List.Icon {...props} icon="view-dashboard" />}
        >
          {item.tarefaId != "" && handleTask(tasks, item.tarefaId)}
        </List.Accordion>
      </List.Section>
    </View>
  );

  return (
    <Container>
      <Body>
        <View>
          <Text style={styles.welcomeText}>Bem vindx USER!</Text>
          <Text style={styles.projectText}>
            Você tem X projetos em andamento
          </Text>
        </View>
        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 28,
    marginTop: 40,
    textAlign: "center",
    color: "#fff",
  },
  projectText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 22,
    textAlign: "center",
    color: "#fff",
  },
  textList: {
    fontSize: 16,
  },
  viewCard: {
    backgroundColor: "#FEC044",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    elevation: 5,
  },
  nomeProjeto: {
    fontSize: 22,
    margin: "auto",
    marginTop: 14,
  },

  icons: {
    flexDirection: "row",
    marginLeft: 40,
  },
  viewProgressBar: {},
});

/*

const handleChange = (tarefa, id, projetoTarefaId) => {
     console.log(projetoTarefaId);

    const arr = [];
    //console.log(tasks);
    projetoTarefaId.forEach((projetoTarefaId) => {
      tarefa.map((tarefa) => {
        if (tarefa.id == projetoTarefaId) {
          arr.push(tarefa);          
        }
      });
    });
    console.log(arr)

    let temp = arr.map((task) => {
      if (id === arr.id) {
        //task.isChecked == true;
        return { ...arr, isChecked: !arr.isChecked };
      }
      // console.log("-->" + task.tituloTarefa);
      return arr;
    });
    setTask(temp);
  };
*/
