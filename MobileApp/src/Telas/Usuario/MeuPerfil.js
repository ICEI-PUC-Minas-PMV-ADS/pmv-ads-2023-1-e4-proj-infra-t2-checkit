import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "../../Componentes/ProgressBar";

export default function MeuPerfil() {
  const [numero, setNumero] = useState(0);

  const add = () => {
    setNumero(numero + 1);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPressOut={add}>
        <ProgressBar progresso={20}/>
        <Text>{numero}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});



