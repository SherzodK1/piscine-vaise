import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
});

export default {
  getCours() {
    return api.get("/cours");
  },
};