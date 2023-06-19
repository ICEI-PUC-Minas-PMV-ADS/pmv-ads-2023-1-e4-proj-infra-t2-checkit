import axios from "axios";
import validateToken from "./ValidateToken";

const tokenObject = validateToken();

export const api = axios.create({
  baseURL: "https://checkit-api-gateway-production.up.railway.app/api/",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${tokenObject.jwtToken}`,
  }
});

export const login = async (email, password) => {
  const response = await api.post("/users/authenticate", { email, password });
  localStorage.setItem("jwtToken", JSON.stringify(response.data));
  console.log(response.data);
  return response.data;
};

export const register = async (name, email, password, role = 1) => {
  const response = await api.post("/users", { name, email, password, role });
  return response.data;
};

export const updateUser = async (name, password, email) => {
  const userDataResponse = await api.get("/users");
  const user = userDataResponse.data.find((user) => user.email === email);

  if (!user) {
    throw new Error("User not found.");
  }

  const id = user.id;

  const response = await api.put(`/users/${id}`, { name, email, password });
  return response.data;
};
