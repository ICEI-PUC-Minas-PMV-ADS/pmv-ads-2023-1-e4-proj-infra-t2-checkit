
import { AppRegistry } from "react-native";
import CadastroUsuario from "./src/Telas/Usuario/CadastroUsuario";
import Main from "./src/Navegacoes/Main";
import { NavigationContainer } from "@react-navigation/native";
import { AuthUserProvider } from "./src/Contexts/AuthUserProvider";
import UserProvider from "./src/Contexts/UserProvider";
AppRegistry.registerComponent("CheckIt", () => CadastroUsuario);

const App = () => {

  return (
    <NavigationContainer>
      <UserProvider>
      <AuthUserProvider>

      <Main/>
      </AuthUserProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;




