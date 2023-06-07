
import { AppRegistry } from "react-native";
import CadastroUsuario from "./src/Telas/Usuario/CadastroUsuario";
import Main from "./src/Navegacoes/Main";
import { NavigationContainer } from "@react-navigation/native";
import { AuthUserProvider } from "./src/Contexts/AuthUserProvider";
AppRegistry.registerComponent("CheckIt", () => CadastroUsuario);

const App = () => {

  return (
    <NavigationContainer>
      <AuthUserProvider>

      <Main/>
      </AuthUserProvider>

    </NavigationContainer>
  );
};

export default App;




