import { useEffect, useState } from 'react';
import { getAllProjects } from "../services/Api.js";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}

export default ProjectList;
