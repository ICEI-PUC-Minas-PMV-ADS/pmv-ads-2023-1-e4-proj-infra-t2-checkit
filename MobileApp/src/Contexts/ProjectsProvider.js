import { createContext, useState } from "react";
import { baseURL } from "../Services/URL";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2NDhiOGI0N2E1NzFlMGI4Y2ZmYjUwNjEiLCJuYmYiOjE2ODcwMzA5MjksImV4cCI6MTY4NzA1OTcyOSwiaWF0IjoxNjg3MDMwOTI5fQ.s6uaX3MuGVxutLlfH_2ABXCu9w9pkzy71lW6Q40TN_s";

  const getAllProjects = async (id) => {
    return await fetch(`${baseURL}/api/projects/getAllProjectsThisUser/${id}`, {
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
  const getProject = async (id) => {
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
  const postProject = async (param) => {
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
  const putProject = async (id, param) => {
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
  const deleteProject = async (id) => {
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
        project,
        setProject,
        getProject,
        postProject,
        putProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

/*
    //   // GET id
    //   const getProject = async (id) => {
    //     console.log(`${baseURL}/api/projects/${id}`);
    //     return await fetch(`${baseURL}/api/projects/${id}`, {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then((response) => response.json())
    //       .then((data) => console.log(data))
    //       .catch((error) => console.error(error));
    //   };
    //   // getProject("648b95c03661951d2e855f49");
    //   // const param = {
    //   //   title: "Consertar Som Aiwa",
    //   //   dueDate: new Date(),
    //   //   status: "Finalizado",
    //   //   tarefaId: [],
    //   //   userId: "648b8b47a571e0b8cffb5061",
    //   // };
    //   // const postProject = async (param) => {
    //   //   console.log("param: " + JSON.stringify(param));
    //   //   return await fetch(`${baseURL}/api/projects/`, {
    //   //     method: "POST",
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //       Authorization: `Bearer ${token}`,
    //   //     },
    //   //     body: JSON.stringify(param),
    //   //   })
    //   //     .then((response) => response.json())
    //   //     .then((json) => console.log(json))
    //   //     .catch((e) => console.error(e));
    //   // };
    //   // //postProject(param);
    //   // PUT
    //   const putProject = async (id, param) => {
    //     return await fetch(`${baseURL}/api/projects/${id}`, {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(param),
    //     })
    //       .then((response) => console.log(response.status))
    //       .catch((error) => console.error(error));
    //   };
    //   //putProject("648b95c03661951d2e855f49", param);
    //   // DELETE
    //   const deleteProject = async (id) => {
    //     return await fetch(`${baseURL}/api/projects/${id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //       .then((response) => console.log(response.status))
    //       .catch((error) => console.error(error));
    //   };
    //   //deleteProject("6488dbc9500ac58c938de768");
 */
