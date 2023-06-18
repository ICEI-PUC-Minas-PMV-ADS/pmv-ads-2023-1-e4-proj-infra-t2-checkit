import { createContext, useState } from "react";
import { baseURL } from "../Services/URL";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2NDhiOGI0N2E1NzFlMGI4Y2ZmYjUwNjEiLCJuYmYiOjE2ODcwMzA5MjksImV4cCI6MTY4NzA1OTcyOSwiaWF0IjoxNjg3MDMwOTI5fQ.s6uaX3MuGVxutLlfH_2ABXCu9w9pkzy71lW6Q40TN_s";

  // GET
  const getTask = async (id) => {
    //console.log(`${baseURL}/api/projects/${id}`);
    return await fetch(`${baseURL}/api/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  // POST
  const postTask = async (param) => {
    console.log("param: ", param);
    return await fetch(`${baseURL}/api/projects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then((data) => setProject(data))
      .catch((e) => console.error(e));
  };

  // PUT
  const putTask = async (id, param) => {
    return await fetch(`${baseURL}/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    })
      .then((response) => console.log(response.status))
      .catch((error) => console.error(error));
  };

  // DELETE
  const deleteTask = async (id) => {
    return await fetch(`${baseURL}/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => console.log(response.status))
      .catch((error) => console.error(error));
  };

  return (
    <ProjectContext.Provider
      value={{
        task,
        setTask,
        getTask,
        postTask,
        putTask,
        deleteTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
