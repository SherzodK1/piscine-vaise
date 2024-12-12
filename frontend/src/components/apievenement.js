import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
});

export default {
  /**
   * Récupère tous les équipements.
   * @returns {Promise} Liste des équipements.
   */
  getEvenement() {
    return api.get("/evenement");
  },

  /**
   * Récupère un équipement spécifique par son ID.
   * @param {string} id - L'ID de l'équipement.
   * @returns {Promise} Détails de l'équipement.
   */
  getEvenementById(id) {
    return api.get(`/evenement/${id}`);
  },
};


