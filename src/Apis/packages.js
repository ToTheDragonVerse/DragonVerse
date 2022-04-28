import { API_URL } from "../config";
import axios from "axios";

export const packageApi = {
  async list() {
    return axios.get(`${API_URL}/packages?activated=true`);
  }
}
