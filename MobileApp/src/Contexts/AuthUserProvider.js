import { createContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { URLUSER } from "../Services/URL";
export const AuthUserContext = createContext({});

import API from "../Services/webapiservices";
export const AuthUserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const postLogin = async (param) => {
    return await API.post(URLUSER, param)
      .then((response) => {
        
        if (response) setUser(response);

        return response;
      })
      .catch((error) => console.log(error));
    };

    return (
      <AuthUserContext.Provider
        value={{
          postLogin,
          user,
          setUser,
        }}
      >
        {children}
      </AuthUserContext.Provider>
    );
};
