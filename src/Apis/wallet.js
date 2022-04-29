import axios from './index';

export async function loginBySign(address, sign) {
  return axios.post("auth/wallet_login", {
    address,
    sign,
  });
};

export async function getNonce(address) {
  return axios.post("users/nonce", {
    address,
  });
};

export async function getMe() {
  return axios.post("auth/me");
}

export async function profile(id) {
  return axios.post("users/" + id);
}

export async function getProfile(id) {
  return axios.get("users/" + id);
}

export async function getByAddress(address) {
  return axios.get("users/address/" + address);
}

export async function updateProfile(id, payload) {
  return axios.patch(`users/${id}`, payload);
}
