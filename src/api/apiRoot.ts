import axios from "axios";

const BASE_URL = "http://128.199.132.180/";

const jsonHeaders = {
  "Content-Type": "application/json",
};
const formDataHeaders = {
  "Content-Type": "multipart/form-data",
};

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: jsonHeaders,
});

export const axiosWithFile = axios.create({
  baseURL: BASE_URL,
  headers: formDataHeaders,
});
