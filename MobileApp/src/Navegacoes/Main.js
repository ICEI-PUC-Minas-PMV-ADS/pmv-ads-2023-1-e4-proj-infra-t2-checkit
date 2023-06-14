import React from "react";

// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Telas/Usuario/Login";
import CadastroUsuario from "../Telas/Usuario/CadastroUsuario";
// import { AuthProvider } from "../contexts/AuthProvider";
import NovoProjeto from "../Telas/Projeto/NovoProjeto";
import Home from "../Telas/Home";
import MainHome from "../Telas/Usuario/MainHome";
import HomeProjeto from "../Telas/Projeto/HomeProjeto";
// const Stack = createStackNavigator();
import EditarUsuario from "../Telas/Usuario/EditarUsuario";
import MeuPerfil from "../Telas/Usuario/MeuPerfil";
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="CadastroUsuario">
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
        name="NovoProjeto"
        component={NovoProjeto}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MainHome"
        component={MainHome}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="EditarUsuario"
        component={EditarUsuario}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="HomeProjeto"
        component={HomeProjeto}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MeuPerfil"
        component={MeuPerfil}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
