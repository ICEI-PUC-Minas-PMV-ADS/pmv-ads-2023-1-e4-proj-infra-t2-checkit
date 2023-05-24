import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../Componentes/Container";
import Body from "../../Componentes/Body";

export default function HomeProjeto() {
  return (
    <Container>
      <Body>
        <View style={styles.containerText}>
          <Text style={styles.welcomeText}>Bem vindx USER!</Text>
          <Text style={styles.projectText}>
            Você tem X projetos em andamento
          </Text>
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
    fontSize: 20,
  },
});
