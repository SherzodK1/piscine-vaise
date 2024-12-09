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
        <v-row>
          <v-col
            v-for="equipement in equipements"
            :key="equipement.id_Equipement"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6"
          >
            <v-card class="text-center rounded-lg" outlined>
              <!-- Image dynamique ou placeholder -->
              <v-img
                :src="equipement.image || 'https://via.placeholder.com/400'"
                height="200"
                cover
              ></v-img>
              <v-card-title class="text-h5">{{ equipement.nom }}</v-card-title>
              <v-card-text>
                <p>Type : {{ equipement.type }}</p>
                <p>Quantité totale : {{ equipement.quantite }}</p>
                <p>Durée : {{ equipement.duree }} heures</p>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn color="primary">Informations location</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <AppFooter />
  </div>
</template>

<script>
import axios from "axios";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "EquipementsPage",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      equipements: [], // Liste des équipements récupérés depuis l'API
      error: null, // Variable d'erreur
    };
  },
  methods: {
    async fetchEquipements() {
      try {
        const response = await axios.get("http://localhost:3000/api/equipements");
        console.log("Equipements récupérés :", response.data);  // Log des données
        this.equipements = response.data; // Récupération des équipements depuis l'API
        this.error = null; // Réinitialiser l'erreur si tout se passe bien
      } catch (error) {
        console.error("Erreur lors de la récupération des équipements :", error);
        this.error = error.message; // Enregistrer l'erreur
      }
    },
  },
  mounted() {
    this.fetchEquipements(); // Appeler l'API lors du montage
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
</style>
