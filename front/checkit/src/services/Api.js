import axios from "axios";

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getAllProjects = async () => {
 const response = await api.get("https://localhost:5278/api/projects");
return response.data
};

export const login = async (email, password) => {
  console.log(email, password);
  const response = await api.post("https://localhost:5278/api/users/authenticate", { email, password });
  //console.log(response.data);
  return response.data;
};


export const register = async (name, email, password, role = 1) => {
  const response = await api.post("https://localhost:5278/api/users", { name, email, password, role });
  return response.data;
};

export const getTasksByProject = async (projectId) => {
  const response = await axios.get(`https://localhost:7152/api/Projects/GetTaskFromProject/${projectId}`);
  return response.data;
};

// export const getTodos = async (token) => {
//   const response = await api.get('/todos', {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// export const createTodo = async (todo, token) => {
//   const response = await api.post('/todos', todo, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// export const deleteTodo = async (id, token) => {
//   const response = await api.delete(`/todos/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };
