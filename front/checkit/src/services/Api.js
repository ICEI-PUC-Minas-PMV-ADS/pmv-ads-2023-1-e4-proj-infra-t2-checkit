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

export default api;
