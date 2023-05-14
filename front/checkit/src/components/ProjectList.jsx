import { useEffect, useState } from 'react';
import { getAllProjects } from "../services/Api.js";


function ProjectList() {
  const [projects, setProjects] = useState([]);


  // const [projectsTeste] = [
  //   { name: 'Projeto 1', key: 'A', updatedBy: 'Julia', dueDate: '2023-05-14T12:10:02.275Z', status: 'concluido' },
  //   { name: 'Projeto 2', key: 'M', updatedBy: 'Ila', dueDate: '2023-06-14T12:10:02.275Z', status: 'concluido' },
  //   { name: 'Projeto 3', key: 'P', updatedBy: 'Henry', dueDate: '2023-08-14T12:10:02.275Z', status: 'concluido' },
  //   { name: 'Projeto 4', key: 'L', updatedBy: 'Lucia', dueDate: '2023-09-14T12:10:02.275Z', status: 'concluido' },
  //   ]


  useEffect(() => {
    getAllProjects()
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

    return projects;
}

export default ProjectList;
