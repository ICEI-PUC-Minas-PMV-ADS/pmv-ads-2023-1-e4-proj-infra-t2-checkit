import { useEffect, useState, useCallback } from 'react';
import { getAllProjects, getTasksByProject } from "../services/Api.js";


export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //editar para fazer projetos por usuário
    getAllProjects()
    .then((res) => {
      console.log(res);
      setProjects(res);
    })
    .catch((error) => console.log(error));
  }, []);

  const updateProjectsTasks = useCallback(async () => {
    try {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          const tasks = await getTasksByProject(project.id);
          return { ...project, tasks };
        })
      );
      setProjects(updatedProjects);
    } catch (error) {
      console.error(error);
    }
  }, [projects]);


  useEffect(() => {
    updateProjectsTasks();
  }, [updateProjectsTasks]);

  return projects;
}
