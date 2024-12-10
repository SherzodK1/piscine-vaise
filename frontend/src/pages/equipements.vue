<template>
  <div>
    <AppHeader />
    <v-main>
      <!-- Section Hero -->
      <v-img
        src="https://picsum.photos/400/400?random=5"
        max-height="600px"
        cover
        class="d-flex justify-start align-center mb-14"
      >
        <v-container
          class="bg-grey-darken-4 text-center d-flex flex-column align-center justify-start rounded-pill opacity-80 py-6 px-8"
        >
          <h1 class="text-h3 white--text">Nos Équipements</h1>
          <p class="white--text ma-2">
            Explorez notre large gamme d'équipements pour vos activités sportives.
          </p>
        </v-container>
      </v-img>

      <!-- Section Équipements -->
      <v-container fluid class="my-8 bg-blue-darken-4 py-12">
        <h2 class="text-center white--text mb-8 text-h4">
          Équipements disponibles
        </h2>

        <!-- Chargement ou Erreur -->
        <div v-if="loading" class="text-center white--text">
          Chargement des équipements...
        </div>
        <div v-if="error" class="text-center red--text">
          Erreur : {{ error }}
        </div>

        <!-- Liste des équipements -->
        <v-row v-if="equipements && equipements.length > 0">
          <v-col
            v-for="equipement in equipements"
            :key="equipement.id"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6"
          >
            <v-card class="text-center rounded-lg" outlined>
              <!-- Affichage de l'image à partir de Blob -->
              <v-img
                :src="getImageUrl(equipements.imageBytes)"
                height="200"
                cover
              ></v-img>
              <v-card-title class="text-h5">{{ equipement.nom }}</v-card-title>
              <v-card-text>
                <p>Type : {{ equipement.type }}</p>
                <p>Durée : {{ equipement.duree }} heures</p>
                <p>Date : {{ equipement.createdAt }} </p>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn color="primary">Informations location</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Message si aucun cours -->
        <div v-else class="text-center white--text">
          Aucun équipements disponible pour le moment.
        </div>
      </v-container>
    </v-main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import api from "@/components/apiequipement"; // L'API pour les requêtes

export default {
  name: "EquipementsPage",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      equipements: [], // Liste des équipements
      loading: true, // Indicateur de chargement
      error: null, // Variable pour les erreurs
    };
  },
  methods: {
    async fetchEquipements() {
      try {
        const response = await api.getEquipements();
        this.equipements = response.data; // Assignation des équipements
      } catch (err) {
        this.error = err.message; // Gestion des erreurs
      } finally {
        this.loading = false; // Fin du chargement
      }
    },
    /**
     * Convertit un tableau d'octets en URL utilisable pour l'image.
     * @param {Uint8Array} byteArray - Les données de l'image en Bytes.
     * @returns {string} - L'URL Blob de l'image.
     */
    getImageUrl(byteArray) {
      if (!byteArray) return "https://via.placeholder.com/400"; // Placeholder si aucune image
      const blob = new Blob([byteArray], { type: "image/jpeg" }); // Conversion en Blob
      return URL.createObjectURL(blob); // Création de l'URL Blob
    },
  },
  async created() {
    await this.fetchEquipements(); // Récupérer les équipements
  },
};
</script>

<style scoped>
.v-main {
  background-color: #121212;
}

.v-container {
  padding: 0 24px;
}

.v-card {
  transition: transform 0.2s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05);
}

.red--text {
  color: red;
}
</style>
