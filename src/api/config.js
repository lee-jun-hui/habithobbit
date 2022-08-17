import axios from "axios";
import { getUser } from "../utils/securestore.utils";

const axiosConn = axios.create({
  baseURL: "https://habithobbit-server.herokuapp.com",
});

export default axiosConn;

// Request interceptor (Outgoing)
axiosConn.interceptors.request.use(
  async (config) => {
    //Do something before request is sent
    let user = await getUser();
    user = JSON.parse(user);

    const token = user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
