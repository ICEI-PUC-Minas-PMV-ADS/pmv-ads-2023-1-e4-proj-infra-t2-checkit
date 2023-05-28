import { Profiler, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { List, Button, Divider } from "react-native-paper";
import Container from "../../Componentes/Container";
import Body from "../../Componentes/Body";
import { Botao } from "../../Componentes/Botao";
import { ProgressBar } from "../../Componentes/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const item = [
  {
    id: 1,
    nomeProjeto: "Fazer festa",
    descricao: "Organização da festa",
  },
  {
    id: 2,
    nomeProjeto: "Reformar Mesa",
    descricao: "Reforma",
  },
];
const task = [
  {
    id: 1,
    projId: 1,
    tasks: ["Arrumar mesa", "Comprar salgado", "Comprar breja"],
  },
  {
    id: 2,
    projId: 2,
    tasks: ["Comprar verniz", "Comprar estopa", "Chave de fenda"],
  },
];

export default function HomeProjeto() {
  const navigation = useNavigation();

  // const [expanded, setExpanded] = useState(true);
  // const handlePress = () => setExpanded(!expanded);

  const handleExcluir = (item) => {
    console.log("Excluir Item");
  };

  const renderItem = ({ item }) => (
    <View style={styles.viewCard}>
      <List.Item
        title={<Text style={styles.nomeProjeto}>{item.nomeProjeto}</Text>}
        description={
          <View>
            <Text style={styles.textList}>{item.descricao}</Text>
            <Text>Vence 01/01/2001</Text>
            {/* <ProgressBar progresso={20} />  */}
            <Text>Progress Bar Aqui</Text>
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
          <List.Item title={task[0].tasks[0]} />
          <List.Item title={task[0].tasks[1]} />
          <List.Item title={task[0].tasks[2]} />
        </List.Accordion>
      </List.Section>
    </View>
  );

  return (
    <Container>
      <Body>
        <>
          <View>
            <Text style={styles.welcomeText}>Bem vindx USER!</Text>
            <Text style={styles.projectText}>
              Você tem X projetos em andamento
            </Text>
          </View>
          <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={((item) => item.id, console.log(item))}
          />
        </>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 28,
    marginTop: 40,
    textAlign: "center",
  },
  projectText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 22,
    textAlign: "center",
  },
  textList: {
    fontSize: 16,
  },
  viewCard: {
    backgroundColor: "#85B1E4",
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
});

// <View style={styles.containerText}>
//   <Text style={styles.welcomeText}>Bem vindx USER!</Text>
//   <Text style={styles.projectText}>Você tem X projetos em andamento</Text>
//   <View style={styles.viewCard}>
//     <View style={styles.icons}>
//       <Text>Vence em 2 dias</Text>

//       <List.Icon style={{ marginLeft: 20 }} icon={"lead-pencil"} />
//       <List.Icon style={{ marginLeft: 5 }} icon={"trash-can"} />
//     </View>

//     <ProgressBar progresso={20} />
//     <Text style={styles.nomeProjeto}>{item.nomeProjeto}</Text>
//     <Text>{item.descricao}</Text>
//   </View>
//   <TouchableOpacity onPress={() => {}}>
//     <Button
//       style={styles.button}
//       textColor="red"
//       onPress={() => navigation.navigate("NovoProjeto", { item })}
//     >
//       <Text style={styles.textBtn}>Editar</Text>
//     </Button>
//   </TouchableOpacity>
// </View>
