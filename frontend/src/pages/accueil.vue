<template class="bg-white">
  <AppHeader />
  <div class="bg-grey-darken-4">
    <!-- Section Hero -->
    <v-img
      src="https://i.goopics.net/8g7jq3.jpg"
      max-height="600px"
      cover
      class="d-flex justify-start align-center mb-14"
    >
      <v-container
        class="bg-grey-darken-4 text-center d-flex flex-column align-center justify-start rounded-pill opacity-80"
      >
        <h1 class="text-h3 white--text">ATLANTIS</h1>
        <p class="white--text ma-2">
          Le nouveau centre sportif Dans Lyon Vaise, venez découvrir nos
          activités
        </p>
        <v-btn color="primary" to="/evenement" dark>En savoir plus</v-btn>
      </v-container>
    </v-img>
    <!-- Section cours -->
    <v-container
      fluid
      class="d-flex justify-center flex-column my-4 bg-blue-darken-4 py-12 mb-16"
    >
      <v-container class="text-center text-h4 bg-blue-darken-4 pb-14">
        <h2>Des cours pour tous les goûts et tous les âges</h2>
      </v-container>
      <v-row v-if="cours && cours.length > 0">
        <v-col
          v-for="cour in cours"
          :key="cour.Id_Cours"
          cols="3"
          sm="6"
          md="4"
          class="d-flex justify-center mb-6"
        >
          <v-card class="text-center rounded-lg" outlined>
            <v-img :src="cour.image" height="200" width="250" cover></v-img>
            <v-card-title class="text-h5">{{ cour.nom }}</v-card-title>
            <v-card-text>
              <p>Capacité : {{ cour.quantite }}</p>
              <p>Durée : {{ cour.duree }} heures</p>
            </v-card-text>
            <v-btn class="mb-4" to="/cours" color="primary">
              en savoir plus
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="d-flex justify-center my-4 bg-blue-darken-1 py-16"
    >
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card class="text-center rounded-lg" light>
            <v-img
              src="https://i.goopics.net/2w6x3k.jpg"
              max-height="400px"
              cover
            ></v-img>
            <v-card-title class="text-h5">FORFAIT</v-card-title>
            <v-card-text>
              Découvrez nos séances de fitness et de renforcement musculaire
              adaptées à tous les niveaux.
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="primary" to="/forfait"> En savoir plus </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AppFooter />
  </div>
</template>

<script>
import api from "../components/apicours"; // L'API pour les requêtes

export default {
  data() {
    return {
      cours: [],
    };
  },
  methods: {
    async fetchCours() {
      try {
        const response = await api.getCours();
        this.cours = response.data;
        console.log(this.cours);
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    await this.fetchCours();
  },
};
</script>
