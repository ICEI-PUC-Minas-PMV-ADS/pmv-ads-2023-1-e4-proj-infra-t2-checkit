import ProjectCard from '../components/Card.jsx'
import MenuBar from "../components/Header";
import ProjectList from '../components/ProjectList';


export default function IndexGrid() {
  const projects = ProjectList();

  return (
    <>
    <MenuBar />
    <div className="container p-3">
      <div className="d-flex flex-wrap text-center">
      {projects.map(project => <ProjectCard project={project} key={project.key} />)}
      </div>
    </div>
    </>
  );
}
