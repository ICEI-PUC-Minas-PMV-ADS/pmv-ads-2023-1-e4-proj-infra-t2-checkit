import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5278/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getAllProjects = async () => {
 const response = await api.get("/projects");
return response.data
};

export const login = async (email, password) => {
  console.log(email, password);
  const response = await api.post("/users/authenticate", { email, password });
  return response.data;
};


export const register = async (name, email, password, role = 1) => {
  const response = await api.post("/users", { name, email, password, role });
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
