import { api } from "../services/api";
import { createContext, useContext, useState } from "react";

export const ProjectsContext = createContext({});

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      const response = await api.get(`projects/getAllProjectsThisUser`);
      setProjects(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <ProjectsContext.Provider value={{ getAllProjects, projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
