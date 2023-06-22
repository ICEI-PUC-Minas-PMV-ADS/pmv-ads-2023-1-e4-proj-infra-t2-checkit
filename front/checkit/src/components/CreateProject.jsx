import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function CreateProjectForm({ onSubmit }) {
  const { createProject } = useProjects();

  const handleSubmit = async (project) => {
    try {
      const updatedProject = {
        ...project,
        tarefaId: project.tarefaId.map((task) => task.id), // Send only task IDs
      };

      const createdProjectData = await createProject(updatedProject);
      onSubmit(createdProjectData);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return <ProjectForm onSubmit={handleSubmit} />;
}
