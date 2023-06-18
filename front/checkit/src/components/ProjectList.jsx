import { useEffect, useState } from 'react';
import { getAllProjects } from "../services/Api.js";


export default function ProjectList() {
  // const [projects, setProjects] = useState([]);


  const [projects, setProjects] = useState([
    { title: 'Limpar o quarto', dueDate: '2023-05-18T12:10:02.275Z', tasks: ['1', '2', '3', '4', '5'], id: '1' },
    { title: 'Projeto: front-end', dueDate: '2023-06-14T12:10:02.275Z', tasks: ['6', '7', '8'], id: '2'},
    { title: 'Viagem 2023', dueDate: '2023-08-14T12:10:02.275Z', tasks: ['9', '10', '11', '12'], id: '3' },
    { title: 'Arrumar emprego', dueDate: '2023-09-14T12:10:02.275Z', tasks: ['13', '14', '15', '16'], id: '4' },
    ]);


    const [tasks, setTasks] = useState([
      { id: '1', title: 'Tirar o lixo' },
      { id: '2', title: 'Lavar as roupas' },
      { id: '3', title: 'Espanar os moveis' },
      { id: '4', title: 'Varrer o chão' },
      { id: '5', title: 'Passar o pano' },
      { id: '6', title: 'HTML forms' },
      { id: '7', title: 'CSS forms' },
      { id: '8', title: 'Integrar com o backend' },
      { id: '9', title: 'Marcar as férias' },
      { id: '10', title: 'Comprar passagem' },
      { id: '11', title: 'Reservar hotel' },
      { id: '12', title: 'Comprar casaco' },
      { id: '13', title: 'Ajeitar o CV' },
      { id: '14', title: 'Escrever carta de motivação' },
      { id: '15', title: 'Atualizar o LinkedIn' },
      { id: '16', title: 'Procurar vagas' },
      ]);

      const updatedProjects = projects.map(project => {
        const updatedTasks = project.tasks.map(taskId => {
          const task = tasks.find(task => task.id === taskId);
          return { id: taskId, title: task.title };
        });

        return { ...project, tasks: updatedTasks };
      });


  // useEffect(() => {
  //   getAllProjects()
  //     .then((res) => {
  //       console.log(res);
  //       setProjects(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return updatedProjects;
}
