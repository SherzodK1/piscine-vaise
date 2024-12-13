import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
});

export default {
  // **Utilisateurs**
  getUtilisateurs() {
    return api.get("/utilisateurs");
  },

  createUtilisateur(data) {
    return api.post("/utilisateurs", data);
  },

  updateUtilisateur(id, data) {
    return api.put(`/utilisateurs/${id}`, data);
  },

  deleteUtilisateur(id) {
    return api.delete(`/utilisateurs/${id}`);
  },

  // **Équipements**
  getEquipements() {
    return api.get("/all-equipement");
  },

  createEquipement(data) {
    return api.post("/admin-equipements", data);
  },

  updateEquipement(id, data) {
    return api.put(`/equipements/${id}`, data);
  },

  deleteEquipement(id) {
    return api.delete(`/equipements/${id}`);
  },

  // **Cours**
  getCours() {
    return api.get("/all-cours");
  },

  createCours(data) {
    return api.post("/cours", data);
  },

  updateCours(id, data) {
    return api.put(`/cours/${id}`, data);
  },

  deleteCours(id) {
    return api.delete(`/cours/${id}`);
  },

  // **Événements**
  getEvenements() {
    return api.get("/all-evenement");
  },

  createEvenement(data) {
    return api.post("/evenements", data);
  },

  updateEvenement(id, data) {
    return api.put(`/evenements/${id}`, data);
  },

  deleteEvenement(id) {
    return api.delete(`/evenements/${id}`);
  },

  // **Espaces**
  getEspaces() {
    return api.get("/espaces");
  },

  createEspace(data) {
    return api.post("/espaces", data);
  },

  updateEspace(id, data) {
    return api.put(`/espaces/${id}`, data);
  },

  deleteEspace(id) {
    return api.delete(`/espaces/${id}`);
  },

  // **Salles**
  getSalles() {
    return api.get("/salles");
  },
};
