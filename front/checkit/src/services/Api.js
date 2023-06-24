import axios from "axios";
import validateToken from "./ValidateToken";
import { baseURL } from "../../../../MobileApp/src/Services/URL";
import jwt_decode from "jwt-decode";

const tokenObject = validateToken();

export const api = axios.create({
  baseURL: "https://checkit-api-gateway-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${tokenObject.jwtToken}`,
  },
});

export const login = async (email, password) => {
  const response = await api.post("/users/authenticate", { email, password });
  localStorage.setItem("jwtToken", JSON.stringify(response.data));
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post(
    "https://checkit-api-gateway-production.up.railway.app/api/users",
    { name, email, password }
  );
  return response.data;
};

export const updateUser = async (name, password, email) => {
  const jwtToken = localStorage.getItem("jwtToken");

  // Decode the JWT token to extract the user ID
  const decodedToken = jwt_decode(jwtToken);
  console.log(decodedToken)
  const userId = decodedToken.nameid;
  const userDataResponse = await api.get(`/users/${userId}`);
  // const user = userDataResponse.data.find((user) => user.email === email);
  const user = userDataResponse.data;

  if (!user) {
    throw new Error("User not found.");
  }

  // const id = user.id;

  const response = await api.put(`/users/${userId}`, { name, email, password });
  return response.data;
};

