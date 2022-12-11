import axios from "axios";

const url = "http://localhost:5000";

export const getAllUser = () => {
  return axios.get(`${url}/user`);
};

export const register = (user) => {
  return axios.post("http://localhost:5000/users/create", user);
};

export const login = (user) => {
  return axios.post("http://localhost:5000/users/login", user);
};
