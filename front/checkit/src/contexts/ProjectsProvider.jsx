import { api } from "../services/api";
import { createContext, useContext, useState } from "react";

export const ProjectsContext = createContext({});

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      const response = await api.get(`projects/getAllProjectsThisUser`);
      const projectsData = response.data;
      const updatedProjects = await Promise.all(
        projectsData.map(async (project) => {
          const taskIds = project.tarefaId;
          const tasks = await Promise.all(
            taskIds.map(async (taskId) => {
              const task = await getTask(taskId);
              return { id: taskId, title: task.tituloTarefa };
            })
          );
          return { ...project, tarefaId: tasks };
        })
      );
      setProjects(updatedProjects)
      console.log(updatedProjects)
      return updatedProjects;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const getTask = async (id) => {
    try {
      const response = await api.get (`/Tarefas/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const getTaskFromProject = async (projectId) => {
    try {
      const response = await api.get (`/projects/${projectId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const deleteProject = async (id) => {
    try {
      const response = await api.delete(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const updateProject = async (projectId, projectData) => {
    try {
      const response = await api.put(`/projects/${projectId}`, projectData);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const response = await api.put(`/Tarefas/${taskId}`, taskData);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const createTask = async (params) => {
    try {
      const response = await api.post(`/Tarefas/`, params);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const createProject = async (params) => {
    try {
      const response = await api.post(`/projects/`, params);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await api.delete(`/Tarefas/${taskId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };


  return (
    <ProjectsContext.Provider value={{ getAllProjects, getTaskFromProject, deleteProject, createProject, updateProject, updateTask, createTask, deleteTask, projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
