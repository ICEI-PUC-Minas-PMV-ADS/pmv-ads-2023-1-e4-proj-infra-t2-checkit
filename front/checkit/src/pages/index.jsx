import ProjectCard from '../components/Card.jsx'
// import ProjectList from '../components/ProjectList.jsx';


export default function IndexGrid() {
  return (
  <div className="d-flex flex-wrap text-center">
      {/* {console.log(<ProjectList />)} */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
  </div>
  );
}
