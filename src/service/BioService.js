import axios from "axios";

const apiDepartment = axios.create({
  baseURL: "http://localhost:8080/api/bio",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getBioByUserName(userName) {
    return apiDepartment.get("/" + userName);
  }
};
