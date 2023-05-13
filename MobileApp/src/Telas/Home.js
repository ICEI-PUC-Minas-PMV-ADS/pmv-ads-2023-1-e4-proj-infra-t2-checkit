import React, { useState, useContext, useEffect } from "react";
import { BackHandler } from "react-native";
import { BottomNavigation } from "react-native-paper";
import MeuPerfil from "./Usuario/MeuPerfil";
import MainHome from "./Usuario/MainHome";
import CadastroUsuario from "./Usuario/CadastroUsuario";
import NovoProjeto from "./Projeto/NovoProjeto";
import { useNavigation, useRoute } from "@react-navigation/native";

const Home = () => {
  // const {} = useContext(AuthContext);
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: "novoProjeto", 
    title: "Novo Projeto", 
    focusedIcon: "book-edit-outline" },
    {
      key: "cadastroUsuario",
      title: "Cadastro Usuário",
      focusedIcon: "account",
    },
    {
      key: "meuPerfil",
      title: "Meu Perfil",
      focusedIcon: "wheelchair-accessibility",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    meuPerfil: MeuPerfil,
    mainHome: MainHome,
    cadastroUsuario: CadastroUsuario,
    novoProjeto:NovoProjeto,
  });

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#F27405" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
