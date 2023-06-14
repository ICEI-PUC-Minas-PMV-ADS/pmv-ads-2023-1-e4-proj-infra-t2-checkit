import ProjectCard from '../components/Card.jsx'
import MenuBar from "../components/Header";
import ProjectList from '../components/ProjectList';


export default function IndexGrid() {
  // const projects = ProjectList();

  return (
    <>
    <MenuBar />
    <h1 className="p-5 mx-5 mt-5">Olá! Estes são seus projetos em andamento:</h1>
    <div className="container p-3">
      <div className="d-flex flex-wrap text-center">
      {/* {projects.map(project => <ProjectCard project={project} key={project.id} />)} */}
      <ProjectList />

      </div>
    </div>
    </>
  );
}
