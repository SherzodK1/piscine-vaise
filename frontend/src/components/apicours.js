// apiequipement.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
});

export default {
  /**
   * Récupère tous les équipements.
   * @returns {Promise} Liste des équipements.
   */
  getCours() {
    return api.get("/all-cours");
  },

  /**
   * Récupère un équipement spécifique par son ID.
   * @param {string} id - L'ID de l'équipement.
   * @returns {Promise} Détails de l'équipement.
   */
  getCoursById(id) {
    return api.get(`/cours/${id}`);
  },

  inscriptionCours(data) {
    return api.post("/inscrire", data);
  },
};
