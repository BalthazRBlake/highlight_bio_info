import axios from "axios";

const apiBio = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBioByUserName(userName) {
    return apiBio.get("/bio/" + userName);
  },
  getUsersPaginated(offset, size) {
    return apiBio.get("/users/" + (offset - 1) + "/" + size);
  }
};
