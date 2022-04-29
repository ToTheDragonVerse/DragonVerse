import axios from "axios";

export const whitelistApi = {
  async create(payload) {
    return axios.post(`/whitelist`, payload);
  }
}
