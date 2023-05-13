import ProjectCard from '../components/Card.jsx'

export default function IndexGrid() {
  return (
  <div className="container pt-5 text-center">
    <div className="row">
      <div className="col">
      < ProjectCard />
      </div>
      <div className="col">
      < ProjectCard />
      </div>
      <div className="col">
      < ProjectCard />
      </div>
    </div>
    <div className="row">
      <div className="col">
      < ProjectCard />
      </div>
      <div className="col">
      < ProjectCard />
      </div>
      <div className="col">
      < ProjectCard />
      </div>
    </div>
  </div>
  );
}
