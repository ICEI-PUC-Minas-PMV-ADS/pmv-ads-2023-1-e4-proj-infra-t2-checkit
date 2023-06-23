import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function CreateProjectForm({ onSubmit }) {
  const { createProject } = useProjects();

  const handleSubmit = async (project) => {
    try {
      const newProject = {
        ...project,
        tarefaId: []
      };

      const createdProjectData = await createProject(newProject);
      onSubmit(createdProjectData);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return <ProjectForm onSubmit={handleSubmit}  />;
}
