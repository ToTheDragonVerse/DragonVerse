import axios from 'axios';
import { jwtManager } from '../helpers/jwtManager';

export default function configAxios() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  axios.interceptors.request.use(
    (config) => {
      const token = jwtManager.get();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
}
