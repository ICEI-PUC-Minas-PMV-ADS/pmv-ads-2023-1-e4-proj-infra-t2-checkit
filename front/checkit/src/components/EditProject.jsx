import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function EditProjectForm({ projectId, project, onSubmit }) {
  const { updateProject } = useProjects();

  const handleSubmit = async () => {
    try {
      const updatedProject = {
        ...project,
        tarefaId: project.tarefaId.map((task) => task.id),
      };

      const updatedProjectData = await updateProject(projectId, updatedProject);
      onSubmit(updatedProjectData);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return <ProjectForm project={project} onSubmit={handleSubmit} />;
}
