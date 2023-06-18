// import { TodoItem } from "./TaskItem"

// export function TodoList({ todos, toggleTodo, deleteTodo }) {
//   return (
//     <ul className="list">
//       {todos.length === 0 && "No Todos"}
//       {todos.map(todo => {
//         return (
//           <TodoItem
//             {...todo}
//             key={todo.id}
//             toggleTodo={toggleTodo}
//             deleteTodo={deleteTodo}
//           />
//         )
//       })}
//     </ul>
//   )
// }
import { useEffect, useState } from 'react';
import api from './api';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then(response => {
        setProjects(response.data);
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
