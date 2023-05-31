import ProjectForm from "./ProjectForm";

export default function EditProjectForm({ project, onSubmit }) {
  return <ProjectForm project={project} onSubmit={onSubmit} />;
}
