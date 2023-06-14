import React, { useState, useContext, createContext } from "react";
import API from "../Services/webapiservices";
import { URLUSER } from "../Services/URL";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {

  const [usuario, setUsuario] = useState();

  const getUsuario = async(id)=>{

    return await API.get(`${URLUSER}/${id}`).then(response=>
    {
      console.log(response)
      return response

    }
      
      )
    .catch(e=>console.log(e))


  }

  
  const postUsuario = async (param) => {
    return await  API.post(URLUSER,param).then(response=>console.log(response))
      .catch(error => console.error(error));
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