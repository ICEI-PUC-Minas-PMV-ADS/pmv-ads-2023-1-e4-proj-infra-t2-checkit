import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Login from "src\Telas\Login.js"
import CadastroUsuario from "../Telas/CadastroUsuario";
// import { AuthProvider } from "../contexts/AuthProvider";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="CadastroUsuario">
      <Stack.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;