import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
});

export default {
  getEquipements() {
    return api.get("/equipement");
  },
};