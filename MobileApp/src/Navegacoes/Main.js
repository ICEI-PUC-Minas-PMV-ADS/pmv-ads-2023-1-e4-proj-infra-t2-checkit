import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
// import Login from "src\Telas\Login.js"
import CadastroUsuario from "../Telas/Usuario/CadastroUsuario";
// import { AuthProvider } from "../contexts/AuthProvider";
import NovaTarefa from "../Telas/Tarefa/NovaTarefa";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="NovaTarefa">
      <Stack.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="NovaTarefa"
        component={NovaTarefa}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;