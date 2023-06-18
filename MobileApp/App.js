import { AppRegistry } from "react-native";
import CadastroUsuario from "./src/Telas/Usuario/CadastroUsuario";
import Main from "./src/Navegacoes/Main";
import { NavigationContainer } from "@react-navigation/native";
import { AuthUserProvider } from "./src/Contexts/AuthUserProvider";
import UserProvider from "./src/Contexts/UserProvider";
import { ProjectProvider } from "./src/Contexts/ProjectsProvider";
import { TaskProvider } from "./src/Contexts/TaskProvider";

AppRegistry.registerComponent("CheckIt", () => CadastroUsuario);

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <AuthUserProvider>
          <ProjectProvider>
            <TaskProvider>
              <Main />
            </TaskProvider>
          </ProjectProvider>
        </AuthUserProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default App;
