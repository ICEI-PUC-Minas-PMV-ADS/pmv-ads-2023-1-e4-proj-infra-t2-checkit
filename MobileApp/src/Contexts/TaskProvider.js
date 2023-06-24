import { createContext, useState } from "react";
import { baseURL, token } from "../Services/URL";
import { set } from "react-native-reanimated";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {

  const idTasks = []
  const task = []
  const getTaskFromProject = async (projectId) => {
    console.log(`${baseURL}/api/projects/${projectId}`);
    return await fetch(`${baseURL}/api/projects/${projectId}`, {
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
  // GET
  const getTask = async (id) => {
    //console.log(`${baseURL}/api/projects/${id}`);
    return await fetch(`${baseURL}/api/Tarefas/${id}`, {
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
    // console.log("param: ", param);
    console.log(`${baseURL}/api/Tarefas/`);
    return await fetch(`${baseURL}/api/Tarefas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(param),
    })
      .then((response) => response.json())
      .then((json) => {
      idTasks.push(json.id)
       task.push(json)
      // console.log(idTasks)
      })
      .catch((e) => console.error(e));
  };

  // PUT
  const putTask = async (id, param) => {
    return await fetch(`${baseURL}/api/Tarefas/${id}`, {
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
    return await fetch(`${baseURL}/api/Tarefas/${id}`, {
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
    <TaskContext.Provider
      value={{
        task,
        getTask,
        postTask,
        putTask,
        deleteTask,
        idTasks,
        getTaskFromProject,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
