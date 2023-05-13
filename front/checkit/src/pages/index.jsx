import ProjectCard from '../components/Card.jsx'
// import ProjectList from '../components/ProjectList.jsx';


export default function IndexGrid() {
  return (
  <div className="container p-3">
  <div className="d-flex flex-wrap text-center">
      {/* <ProjectList /> */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
  </div>
  </div>
  );
}
