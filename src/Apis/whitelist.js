import { API_URL } from "../config";
import axios from "axios";

export const whitelistApi = {
  async create(payload) {
    return axios.post(`${API_URL}/whitelist`, payload);
  }
}
