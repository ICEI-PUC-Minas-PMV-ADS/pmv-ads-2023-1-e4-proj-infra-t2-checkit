import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TextOverInput = ({ children }) => {
  return <Text style={styles.textTitulos}>{children}</Text>;
};

const styles = StyleSheet.create({
  textTitulos: {
    marginTop: 14,
    textAlignVertical: "center",
    marginLeft: 2,
    fontSize: 16,
    marginBottom: 4,
    color: "#FFF",
  },
});

export default TextOverInput;
