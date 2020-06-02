import axios from "axios";

const apiBio = axios.create({
  baseURL: "http://localhost:8080/api/bio",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBioByUserName(userName) {
    return apiBio.get("/" + userName);
  },
  getUsersPaginated(offset, size) {
    return apiBio.get(offset, size);
  }
};
