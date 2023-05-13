import React, { useState } from "react";


import { AppRegistry } from "react-native";
import CadastroUsuario from "./src/Telas/Usuario/CadastroUsuario";
import Main from "./src/Navegacoes/Main";
import { NavigationContainer } from "@react-navigation/native";

AppRegistry.registerComponent("CheckIt", () => CadastroUsuario);

const App = () => {

  return (
    <NavigationContainer>
      <Main/>

    </NavigationContainer>
  );
};

export default App;




