import { Profiler, useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
  BackHandler,
  Image
} from "react-native";

import { List, Checkbox, Card, FAB } from "react-native-paper";
import Container from "../../Componentes/Container";
import Body from "../../Componentes/Body";
import { Botao } from "../../Componentes/Botao";
import { ProgressBar } from "../../Componentes/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { combineTransition } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ProjectContext } from "../../Contexts/ProjectsProvider";
import { TaskContext } from "../../Contexts/TaskProvider";
import moment from "moment";
import { useIsFocused,useRoute } from "@react-navigation/native";
import { AuthUserContext } from "../../Contexts/AuthUserProvider";
import { baseURL } from "../../Services/URL";
import { token } from "../../Services/URL";
import { UserContext } from "../../Contexts/UserProvider";

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

export default function HomeProjeto({ rota }) {
  const navigation = useNavigation();
  const focused = useIsFocused();

  const[guard,setGuard] = useState(0)
  const[nomeUser,setNomeUser] = useState()
  const{getTask}= useContext(TaskContext)
  const { project, getAllProjects, deleteProject } = useContext(ProjectContext);
  const {getUsuario} = useContext(UserContext)
  const route = useRoute();
  const { user, userId, authToken} = useContext(AuthUserContext);
  const [task, setTask] = useState(tasks);
  const [showDialog, setShowDialog] = useState(false);
  // Testes API

  //Este useEffect serva para quando renderizar a home do projeto,e o botão de back do celular,ao inves de retornar para página de login,fechar o app
 
  useEffect(() => {
    console.log(project.length)
    if (route.name === "HomeProjeto") {
      const backAction = () => {
        BackHandler.exitApp()
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
      return () => backHandler.remove();
    }
  }, []);

  useEffect(() => {
  
    getAllProjects().then();
  
    fetch(`${baseURL}/api/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setNomeUser(data.name))
      .catch((error) => console.error(error));



  }, [focused],[guard]);
  useEffect(() => {
  
    getAllProjects().then();
  

  }, [guard]);


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
  const handleDeleteProject = (item) => {
    console.log(guard)
    deleteProject(item.id).then();
    getAllProjects().then();
    setGuard(1+guard)
    console.log(`Você tem ${project.length} projetos em andamento`);

    // const tarefas = project.map((x,y)=>{
    //   console.log(x.tarefaId)
    //   return x.tarefaId
    // })

    // for(let array of  tarefas) {

    //  for(let id of array){
      
    //   fetch(`${baseURL}/api/Tarefas/${id}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => console.log(data.tituloTarefa))
    //     .catch((error) => console.error(error));
      
    //  }
    // }
   
  };
  // Renderiza accordion
  const handleTask = (projeto, projetoTarefaId) => {

    const arr = [];

    projeto.map((x,y)=>{

      return x.title
    })


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
          
                </List.Accordion>
              </List.Section>
           
             
        
  


          
    </View>
  );

  return (
    <Container>
      <Body>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.welcomeText}>Bem vindx,  {nomeUser}!</Text>
          
            <FAB
              style={styles.account}
              size="small"
              icon="account-circle"
              onPress={() => navigation.navigate("EditarUsuario")}
            />
           
          </View>
          <Text style={styles.projectText}>
            {/* Você tem {project.length} projetos em andamento */}
          </Text>
        </View>
        {project.length == 0 && (
          <View style={styles.viewProjetoVazio}>
            <Image
              style={styles.imgPaper}
              source={require("../../../assets/empty_paper.png")}
            />
            <Text style={styles.textAvisoProjetoVazio}>
              Ops...Você Não possui nenhum projeto no momento
            </Text>
            <Text style={styles.textAvisoProjetoVazio}>
              Crie algum projeto para aparecer em sua lista de projetos!
            </Text>
          </View>
        )}
        <FlatList
          data={project}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
           <FAB
              style={styles.add}
              size="small"
              icon="plus"
              onPress={() => navigation.navigate("NovoProjeto")}
            />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 28,
    marginTop: 40,
    marginLeft: 10,
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
  viewProjetoVazio: {
    alignSelf: "center",
    marginTop: 120,

  },
  imgPaper: {
    width: 180,
    height: 200,
    alignSelf: "center",
    marginBottom:10
  },
  textAvisoProjetoVazio: {
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 2,
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
  account: {
    position: "absolute",
    margin: 18,
    right: 5,
    top: 40,
  
  },

  add: {
    position: "absolute",
    margin: 18,
    right: 0,
    top: 670,
    backgroundColor: "#F9E79F",
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
