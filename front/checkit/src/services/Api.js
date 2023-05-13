import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5278/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = async (email, password) => {
  console.log(email, password);
  const response = await api.post("/users/authenticate", { email, password });
  //console.log(response.data);
  return response.data;
};

export default api;
