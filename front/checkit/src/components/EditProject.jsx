import { useState } from "react";
import ProjectForm from "./ProjectForm";
import { useProjects } from "../contexts/ProjectsProvider";

export default function EditProjectForm({ projectId, project, onSubmit }) {
  const [editedProject, setEditedProject] = useState(project);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const { updateProject } = useProjects();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProject(projectId, editedProject);
      onSubmit(editedProject);
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
  };

  return (
    <ProjectForm
      project={editedProject}
      onSubmit={handleSubmit}
      onChange={handleInputChange}
    />
  );
}
