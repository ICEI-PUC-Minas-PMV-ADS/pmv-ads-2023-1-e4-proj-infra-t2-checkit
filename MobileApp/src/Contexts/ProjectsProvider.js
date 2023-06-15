import { createContext, useState } from "react";

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2NDhiOGI0N2E1NzFlMGI4Y2ZmYjUwNjEiLCJuYmYiOjE2ODY4NjY3NzcsImV4cCI6MTY4Njg5NTU3NywiaWF0IjoxNjg2ODY2Nzc3fQ.hGmfEE6KSGDOSP0GqukXWqWz80HlkXEtl5-JxLTv3Qs";

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
