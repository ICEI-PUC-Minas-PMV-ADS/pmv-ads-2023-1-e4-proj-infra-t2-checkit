import React from "react";

// import { createStackNavigator } from '@react-navigation/stack'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Telas/Usuario/Login"
import CadastroUsuario from "../Telas/Usuario/CadastroUsuario";
// import { AuthProvider } from "../contexts/AuthProvider";
import NovaTarefa from "../Telas/Tarefa/NovaTarefa";

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
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