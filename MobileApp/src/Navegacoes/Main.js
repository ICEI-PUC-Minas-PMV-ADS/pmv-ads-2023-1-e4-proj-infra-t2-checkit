import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD:MobileApp/src/Navegações/Main.js
import CadastroUsuario from "../Telas/CadastroUsuario";
=======
// import Login from "src\Telas\Login.js"
import CadastroUsuario from "../Telas/Usuario/CadastroUsuario";
>>>>>>> 2f1a48edd80a4844d51402f32a77f780a536d89e:MobileApp/src/Navegacoes/Main.js
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