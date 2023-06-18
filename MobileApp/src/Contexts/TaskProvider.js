import { createContext, useState } from "react";
import { baseURL, token } from "../Services/URL";

export const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  const getTaskFromProject = async (projectId) => {
    console.log(`${baseURL}/api/tarefas/${projectId}`);
    return await fetch(`${baseURL}/api/tarefas/${projectId}`, {
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
    console.log("param: ", param);
    return await fetch(`${baseURL}/api/Tarefas/`, {
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
        setTask,
        getTask,
        postTask,
        putTask,
        deleteTask,
        getTaskFromProject,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
