import React, { useState, useContext, createContext } from "react";
import API from "../Services/webapiservices";
import { baseURL } from "../Services/URL";
import { token } from "../Services/URL";
export const UserContext = createContext({});

const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState();
  const getUsuario = async(id)=>{
    return await fetch(`${baseURL}/api/users/${userId}`, {
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
      .then(data=>{
        console.log(data)
      })
      .catch((error) => console.error(error));
  }


  const putUsuario = async (id,param) => {


    return await fetch(`${baseURL}/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    })
      .then((response) => console.log(response.status))
      .catch((error) => console.error(error));
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