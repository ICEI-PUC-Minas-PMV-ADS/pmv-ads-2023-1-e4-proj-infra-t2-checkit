import React, { useState, useContext, createContext } from "react";
import API from "../Services/webapiservices";
import { baseURL } from "../Services/URL";
export const UserContext = createContext({});

const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState();

  const getUsuario = async(id)=>{
    return await fetch(`${baseURL}/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

  }

  
  const postUsuario = async (param) => {
    return await fetch(`${baseURL}/api/users`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        param
      ),
      
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }


  const putUsuario = async (param) => {


    return await API.put(URLUSER, param).then(
      response=>console.log(response)
    )
  }
  


  return (
    <UserContext.Provider
      value={{
        usuario,
        postUsuario,
        getUsuario,
        putUsuario,
       
      }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;