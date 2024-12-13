<template>
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
        class="bg-grey-darken-4 text-center d-flex flex-column align-center justify-start rounded-pill opacity-80 py-6 px-8"
      >
        <h1 class="text-h3 white--text">Nos Évenements</h1>
        <p class="white--text ma-2">
          Découvrez nos événements à venir et participez à des moments
          inoubliables.
        </p>
      </v-container>
    </v-img>

    <!-- Section Événements -->
    <v-container fluid class="my-14 bg-blue-darken-4 py-12">
      <h2 class="text-center white--text mb-8 text-h4">
        Événements disponibles
      </h2>

      <!-- Chargement ou Erreur -->
      <div v-if="loading" class="text-center white--text">
        Chargement des événements...
      </div>
      <div v-if="error" class="text-center red--text">Erreur : {{ error }}</div>

      <!-- Liste des événements -->
      <v-row v-if="evenements && evenements.length > 0">
        <v-col
          v-for="evenement in evenements"
          :key="evenement.id_Evenement"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center mb-6"
        >
          <v-card class="text-center rounded-lg" outlined>
            <v-img
              :src="evenement.image"
              height="200"
              width="250"
              cover
            ></v-img>
            <v-card-title class="text-h5">{{ evenement.nom }}</v-card-title>
            <v-card-text>
              <p>Date : {{ evenement.dateHeureEvenement }}</p>
              <p>Places : {{ evenement.places }} personnes</p>
            </v-card-text>
            <v-btn class="mb-4" @click="openDialog(evenement)" color="primary">
              Détails
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
      <!-- Message si aucun événement -->
      <div v-else class="text-center white--text">
        Aucun événement disponible pour le moment.
      </div>

      <!-- Dialog de détails -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-img :src="selectedEvenement.image" height="250" cover></v-img>
          <v-card-title class="text-h5">{{
            selectedEvenement?.nom
          }}</v-card-title>
          <v-card-text>
            <p>
              <strong>Description :</strong>
              {{ selectedEvenement?.description }}
            </p>
            <p><strong>Lieu :</strong> {{ selectedEvenement?.Id_Salle }}</p>
            <p>
              <strong>Date :</strong>
              {{ selectedEvenement?.dateHeureEvenement }}
            </p>
            <p>
              <strong>Durée :</strong> {{ selectedEvenement?.duree }} heures
            </p>
            <p>
              <strong>Places :</strong>
              {{ selectedEvenement?.places }} personnes
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
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import api from "@/components/apievenement"; // L'API pour les requêtes

export default {
  name: "EvenementsPage",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      user: [],
      evenement: [],
      enregistrement: {
        Id_Evenement: null,
        Id_Utilisateur: null, // Remplacer par l'id de l'utilisateur connecté
      },
      loading: true,
      error: null,
      dialog: false,
      confirmationDialog: false,
      selectedEvenement: null,
    };
  },
  methods: {
    async fetchEvenements() {
      try {
        const response = await api.getEvenement();
        this.evenements = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    openDialog(evenement) {
      this.selectedEvenement = evenement;
      this.dialog = true;
    },
    async reserver() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.enregistrement.Id_Evenement = this.selectedEvenement.Id_Evenement;
      this.enregistrement.Id_Utilisateur = this.user.Id_Utilisateur;
      try {
        await api.enregistrementEvenement(this.enregistrement);
        alert("Vous êtes maintenant inscrit à cet événement!");
      } catch (err) {
        alert("Il n'y a plus de places disponibles pour cet événement.");
        this.error = err.message;
      }
    },
    async finalizeReservation() {
      if (this.selectedEvenement?.places > 0) {
        // Réduire le nombre de places disponibles
        this.selectedEvenement.places -= 1;

        // Mettre à jour l'événement via l'API pour diminuer les places
        try {
          await api.updateEvenement(this.selectedEvenement.Id_Evenement, {
            places: this.selectedEvenement.places,
          });
        } catch (error) {
          this.error = "Erreur lors de la mise à jour des places.";
        }

        // Fermer les dialogues
        this.confirmationDialog = false;
        this.dialog = false;

        // Afficher un message de succès
        alert("Vous êtes maintenant inscrit à cet événement !");
      } else {
        alert("Il n'y a plus de places disponibles pour cet événement.");
      }
    },
  },
  async created() {
    await this.fetchEvenements();
  },
};
</script>
