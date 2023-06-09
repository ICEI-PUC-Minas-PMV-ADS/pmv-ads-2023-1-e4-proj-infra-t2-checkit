import axios from "axios";
import validateToken from "./ValidateToken";

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getAllProjects = async () => {
 const response = await api.get("https://localhost:5278/api/projects", {
  // headers: {
  //   Authorization: `Bearer ${token}`,
  //   },
 } );
return response.data
};

export const login = async (email, password) => {
  console.log(email, password);
  const response = await api.post("https://localhost:5278/api/users/authenticate", { email, password });
  localStorage.setItem("jwtToken", JSON.stringify(response.data));
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


export const updateUser = async (name, password, email) => {
  // Fetch user data to get the ID
  const userDataResponse = await api.get("https://localhost:5278/api/users");
  const user = userDataResponse.data.find((user) => user.email === email);

  if (!user) {
    throw new Error("User not found.");
  }

  const id = user.id;

  // Update user data
  const response = await api.put(`/users/${id}`, { name, email, password });
  return response.data;
};

// export const getTodos = async (id) => {
//   const token = validateToken();
//   console.log(`${token}`);
//   const response = await api.get(`/tarefas/${id}`, {
//     headers: {
//       Authorization: `${token}`,
//     },
//   });
//   console.log(response.data);
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
