import axios from "axios";

const url = "http://localhost:5000";

export const getAllUser = () => {
  return axios.get("http://localhost:5000/users/all");
};

export const register = (user) => {
  return axios.post("http://localhost:5000/users/create", user);
};

export const login = (user) => {
  return axios.post("http://localhost:5000/users/login", user);
};

export const getLeaderBoard = () => {
  return axios.get("http://localhost:5000/users/board");
}
