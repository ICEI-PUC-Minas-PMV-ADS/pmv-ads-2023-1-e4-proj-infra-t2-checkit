import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function EditProjectForm({ projectId, project, onSubmit }) {
  const { updateProject } = useProjects();

  const handleSubmit = async (updatedProject) => {
    try {
      const updatedTarefaIds = updatedProject.tarefaId.map((task) => task.id);
      const updatedProjectData = {
        ...updatedProject,
        tarefaId: updatedTarefaIds,
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
