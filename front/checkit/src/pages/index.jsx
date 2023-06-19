import MenuBar from "../components/Header";
import { useEffect } from "react";
import { useProjects } from "../contexts/ProjectsProvider";
import ProjectCard from "../components/Card";

export default function IndexGrid() {
  const { getAllProjects, projects } = useProjects();

  useEffect(() => {
    const fetchProjects = async () => {
      await getAllProjects();
    };

    fetchProjects();
  }, []);

  return (
    <>
      <MenuBar />
      <h1 className="p-5 mx-5 mt-5">Olá! Estes são seus projetos em andamento:</h1>
      <div className="container p-3">
        <div className="d-flex flex-wrap text-center">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
}
