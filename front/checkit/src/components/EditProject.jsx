import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function EditProjectForm({ projectId, project, onSubmit }) {
  const { updateProject } = useProjects();

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      // Update the project

      const updatedProject = {
        ...project,
        tarefaId: project.tarefaId.map((task) => task.id), // Send only task IDs
      };

      const updatedProjectData = await updateProject(projectId, updatedProject);

      onSubmit(updatedProjectData);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return (
    <ProjectForm
      project={project}
      onSubmit={handleSubmit}
      onChange={onSubmit}
    />
  );
}
