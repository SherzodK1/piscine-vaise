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
          <h1 class="text-h3 white--text">Nos Cours</h1>
          <p class="white--text ma-2">
            Explorez notre large gamme de Cours pour vos activités sportives.
          </p>
        </v-container>
      </v-img>

      <!-- Section Cours -->
      <v-container fluid class="my-8 bg-blue-darken-4 py-12">
        <h2 class="text-center white--text mb-8 text-h4">
          Cours disponibles
        </h2>

        <!-- Chargement ou Erreur -->
        <div v-if="loading" class="text-center white--text">
          Chargement des cousr...
        </div>
        <div v-if="error" class="text-center red--text">
          Erreur : {{ error }}
        </div>

        <!-- Liste des cours -->
        <v-row v-if="cours && cours.length > 0">
          <v-col
            v-for="cour in cours"
            :key="cours.id"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6"
          >
            <v-card class="text-center rounded-lg" outlined>
              <!-- Affichage de l'image à partir de Blob -->
              <v-img
                :src="getImageUrl(cours.imageBytes)"
                height="200"
                cover
              ></v-img>
              <v-card-title class="text-h5">{{ cours.nom }}</v-card-title>
              <v-card-text>
                <p> {{ cours.type }}</p>
                <p>Capacité : {{ cours.places }}</p>
                <p>Durée : {{ cours.duree }} heures</p>
                <p>Lieu : {{ Id_Salle.duree }} </p>
                <p>Intervenant : {{ Id_Utilisateur.duree }} </p>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn color="primary">Informations location</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Message si aucun cours -->
        <div v-else class="text-center white--text">
          Aucun cours disponible pour le moment.
        </div>
      </v-container>
    </v-main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import api from "@/components/apicours"; // L'API pour les requêtes

export default {
  name: "CoursPage",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      cours: [], // Liste des équipements
      loading: true, // Indicateur de chargement
      error: null, // Variable pour les erreurs
    };
  },
  methods: {
    async fetchCours() {
      try {
        const response = await api.getCours();
        this.cours = response.data; // Assignation des équipements
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
    await this.fetchCours(); // Récupérer les équipements
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
