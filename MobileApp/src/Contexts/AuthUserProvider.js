import { createContext, useState } from "react";
import { baseURL } from "../Services/URL";

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({ children }) => {

  const [user, setUser] = useState();

  const [userId, setUserId] = useState();
const [nameUser,setNameUser] = useState('')
  const [authToken, setAuthToken] = useState("");

  const postLogin = async (param) => {
    return await fetch(`${baseURL}/api/Users/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((data) => {
        setAuthToken(data.jwtToken);
        
        
        console.log(data.jwtToken);
        setNameUser(data.name)
        setUserId(data.userId);


        setUserId(data.userId);
        // console.log(data.userId);
      })
      .catch((error) => console.error(error));
  };
  
  const getUser = async (userId) => {
    console.log(`${baseURL}/api/Users/${userId}`);
    return await fetch(`${baseURL}/api/Users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      // .then((data) => console.log(data))
      .catch((e) => console.error(e));
  };

  return (
    <AuthUserContext.Provider
      value={{
        postLogin,
        user,
        setUser,
        setAuthToken,
        authToken,
        postLogin,
        userId,
        getUser,
        nameUser
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};
