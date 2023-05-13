import ProjectCard from '../components/Card.jsx'

export default function IndexGrid() {
  return (
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
  );
}
