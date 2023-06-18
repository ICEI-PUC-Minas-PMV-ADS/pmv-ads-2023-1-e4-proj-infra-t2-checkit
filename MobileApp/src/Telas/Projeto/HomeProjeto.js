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
import { combineTransition } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { baseURL } from "../../Services/URL";
import { ProjectContext } from "../../Contexts/ProjectsProvider";
import moment from "moment";

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
  const { project, getAllProjects, deleteProject } = useContext(ProjectContext);
  const [showDialog, setShowDialog] = useState(false);
  // Testes API
  useEffect(() => {
    getAllProjects().then();
  }, []);

  const [task, setTask] = useState(tasks);

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

  const handleDeleteProject = (item) => {
    deleteProject(item.id).then();
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewCard}>
      <List.Item
        title={<Text style={styles.nomeProjeto}>{item.title}</Text>}
        description={
          <View>
            <Text style={styles.textList}>{item.descricao}</Text>
            <Text>{moment(item.dueDate).format("DD/MM/YYYY")}</Text>
            {/* <ProgressBar progresso={20} />  */}
            <View style={styles.viewProgressBar}>
              <ProgressBar progresso={10} />
            </View>
          </View>
        }
        right={(props) => (
          <>
            <TouchableOpacity onPress={() => handleDeleteProject(item)}>
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
            Você tem {project.length} projetos em andamento
          </Text>
        </View>
        <FlatList
          data={project}
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
