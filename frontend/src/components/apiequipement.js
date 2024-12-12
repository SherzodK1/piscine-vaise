import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // URL du backend
});

export default {
  /**
   * Récupère tous les équipements.
   * @returns {Promise} Liste des équipements.
   */
  getEquipement() {
    return api.get("/all-equipement");
  },

  /**
   * Récupère un équipement spécifique par son ID.
   * @param {string} id - L'ID de l'équipement.
   * @returns {Promise} Détails de l'équipement.
   */
  getEquipementById(id) {
    return api.get(`/equipement/${id}`);
  },

  enregistrementEquipement(data) {
    return api.post("/equipement", data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },  
    });
  },

  /**
   * Met à jour un événement (par exemple, pour réduire les places disponibles).
   * @param {string} id - L'ID de l'événement.
   * @param {object} data - Les données à mettre à jour (comme le nombre de places).
   * @returns {Promise} La réponse de la mise à jour.
   */
  updateEvenement(id, data) {
    return api.put(`/evenement/${id}`, data);
  },
};
