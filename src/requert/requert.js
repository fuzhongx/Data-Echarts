import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:9000/",
  timeout: 9000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});
server.interceptors.request.use((config) => {
    // const token = cookies.get("token");
    // if (token) {
    //   config.headers["Authorization"] = "Bearer " + token;
    // }
    return config;
  }),
    (error) => {
      return Promise.reject(error);
    },
    server.interceptors.response.use((response) => {
      return response;
    }),
    (error) => {
      return Promise.reject(error);
    };

export default server;
