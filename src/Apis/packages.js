import axios from "axios";

export const packageApi = {
  async list() {
    return axios.get(`/packages?activated=true`);
  },

  async getBuyParams(packageId, chainId) {
    return axios.get(`/packages/${packageId}/buy/${chainId}`);
  },

  async crawl(txHash, chainId) {
    return axios.post('/subscriptions/crawl', {
      transactionHash: txHash,
      chainId
    });
  }
}
