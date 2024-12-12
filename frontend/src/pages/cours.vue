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
            Explorez notre large gamme de cours pour vos activités sportives.
          </p>
        </v-container>
      </v-img>

      <!-- Section Cours -->
      <v-container fluid class="my-8 bg-blue-darken-4 py-12">
        <h2 class="text-center white--text mb-8 text-h4">Cours disponibles</h2>

        <!-- Chargement ou Erreur -->
        <div v-if="loading" class="text-center white--text">
          Chargement des cours...
        </div>
        <div v-if="error" class="text-center red--text">
          Erreur : {{ error }}
        </div>

        <!-- Liste des cours -->
        <v-row v-if="cours && cours.length > 0">
          <v-col
            v-for="cour in cours"
            :key="cour.id_Cours"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6"
          >
            <v-card class="text-center rounded-lg" outlined>
              <v-img :src="getImageUrl(cour.image)" height="200" cover></v-img>
              <v-card-title class="text-h5">{{ cour.nom }}</v-card-title>
              <v-card-text>
                <p>Capacité : {{ cour.places }}</p>
                <p>Durée : {{ cour.duree }} heures</p>
              </v-card-text>
              <v-btn @click="openDialog(cour)" color="primary">
                Réserver
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <!-- Message si aucun cours -->
        <div v-else class="text-center white--text">
          Aucun cours disponible pour le moment.
        </div>

        <!-- Dialog de détails -->
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-img
              :src="getImageUrl(selectedCour?.image)"
              height="300"
              cover
            ></v-img>
            <v-card-title class="text-h5">{{ selectedCour?.nom }}</v-card-title>
            <v-card-text>
              <p><strong>Places :</strong> {{ selectedCour?.places }}</p>
              <p><strong>Durée :</strong> {{ selectedCour?.duree }} heures</p>
              <p><strong>Salle :</strong> {{ selectedCour?.Id_Salle }}</p>
              <p>
                <strong>Intervenant :</strong> {{ selectedCour?.interventeur }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dialog = false">Fermer</v-btn>
              <v-btn text color="primary" @click="reserver()">Réserver</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      user: [],
      cours: [],
      inscritption: {
        Id_Cours: null,
        Id_Utilisateur: null, // Remplacer par l'id de l'utilisateur connecté
      },
      loading: true,
      error: null,
      dialog: false,
      selectedCour: null,
    };
  },
  methods: {
    async fetchCours() {
      try {
        const response = await api.getCours();
        this.cours = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    getImageUrl(byteArray) {
      if (!byteArray) return "https://via.placeholder.com/400";
      const blob = new Blob([byteArray], { type: "image/jpeg" });
      return URL.createObjectURL(blob);
    },
    openDialog(cour) {
      this.selectedCour = cour;
      this.dialog = true;
    },
    async reserver() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.inscritption.Id_Cours = this.selectedCour.Id_Cours;
      this.inscritption.Id_Utilisateur = this.user.Id_Utilisateur;
      console.log(this.selectedCour);
      console.log(this.inscritption.Id_Cours);
      console.log(this.inscritption.Id_Utilisateur);
      try {
        await api.inscriptionCours(this.inscritption);
        alert("Vous êtes maintenant inscrit à ce cours !");
      } catch (err) {
        this.error = err.message;
      }
    },
  },
  async created() {
    await this.fetchCours();
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
