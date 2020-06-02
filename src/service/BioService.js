import axios from "axios";

const apiBio = axios.create({
  baseURL: "https://fetch-torre-endpoints.herokuapp.com/api",
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
  getUsersPaginated(offset, size, name) {
    return apiBio.get("/users/" + (offset - 1) + "/" + size + "/" + name);
  }
};
