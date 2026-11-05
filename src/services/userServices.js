import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getUser = (userId) => {
  return axios.get(`${SERVER_URL}/users/${userId}`);
};

export const createUser = (user) => {
  return axios.post(`${SERVER_URL}/users`, user);
};