import { useEffect, useState } from 'react';
import api from '../services/Api.js';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(response => {
        setProjects(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
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
