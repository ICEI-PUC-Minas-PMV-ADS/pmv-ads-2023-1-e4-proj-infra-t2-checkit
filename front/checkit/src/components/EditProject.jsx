import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function EditProjectForm({ projectId, project, onSubmit }) {
  const { updateProject } = useProjects();

  const handleSubmit = async (updatedProject) => {
    try {
      const updatedProjectData = {
        ...updatedProject,
        tarefaId: project.tarefaId
      };

      const updatedData = await updateProject(projectId, updatedProjectData);
      onSubmit(updatedData);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };


  return <ProjectForm project={project} onSubmit={handleSubmit} />;
}
