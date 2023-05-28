import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { List } from "react-native-paper";
import Container from "../../Componentes/Container";
import Body from "../../Componentes/Body";
import { Botao } from "../../Componentes/Botao";
import { ProgressBar } from "../../Componentes/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeProjeto() {
  

  
  return (
    <Container>
      <Body>
        <View style={styles.containerText}>
          <Text style={styles.welcomeText}>Bem vindx USER!</Text>
          <Text style={styles.projectText}>
            Você tem X projetos em andamento
          </Text>
          <View style={styles.viewCard}>
          <View style={styles.icons}>
          <Text>Vence em 2 dias</Text>

          <List.Icon  style={{marginLeft:20}} icon={"lead-pencil"} />
          <List.Icon   style={{marginLeft:5}} icon={"trash-can"} />

          </View>

          <ProgressBar progresso={20}/>
          <Text style={styles.nomeProjeto}>Nome do Projeto</Text>
          <Text >Nome do Projetoasdadsadfasfpoaskfkaspkfpakfpkapfkapkfpaskfpokaspfkaspkf</Text>
         
          </View>
        </View>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerText: {
    flex: 1,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 28,
    marginTop: 40,
  },
  projectText: {
    marginVertical: 20,
    fontSize: 22,
  },
  viewCard:{
    backgroundColor:'#85B1E4',
    borderRadius:10,
    alignContent:'center',
justifyContent:"center",
padding:17

    
  },
  nomeProjeto:{
    fontSize:30,
    margin:'auto',
    marginTop:14
  },
  icons:{
flexDirection:'row',
marginLeft:40,



  }
});
