import Axios from "axios";

const request = Axios.create({
  timeout: 60000,
});

const {
  get: Get,
  post: Post,
  patch: Patch,
  put: Put,
  delete: Delete,
} = request;

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { Get, Post, Patch, Put, Delete };
