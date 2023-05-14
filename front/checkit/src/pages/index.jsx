import ProjectCard from '../components/Card.jsx'
import MenuBar from "../components/Header";


export default function IndexGrid() {
  return (
    <>
    <MenuBar />
    <div className="container p-3">
    <div className="d-flex flex-wrap text-center">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
  </div>
  </div>
    </>
  );
}
