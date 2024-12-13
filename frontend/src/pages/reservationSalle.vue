<template>
  <div class="bg-grey-darken-4">
    <AppHeader />
    <!-- Section Hero -->
    <v-img
      src="https://i.goopics.net/uqd48i.jpg"
      max-height="600px"
      cover
      class="d-flex justify-start align-center mb-14"
    >
      <v-container
        class="bg-grey-darken-4 text-center d-flex flex-column align-center justify-start rounded-pill opacity-80 py-6 px-8"
      >
        <h1 class="text-h3 white--text">Réservation</h1>
        <p class="white--text ma-2">Réservez une espace en toute simplicité.</p>
      </v-container>
    </v-img>

    <!-- Section Formulaire -->
    <v-container fluid class="my-14 bg-blue-darken-4 py-12">
      <h2 class="text-center white--text mb-8 text-h4">
        Formulaire de réservation
      </h2>

      <v-form @submit.prevent="submitReservation">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="nom" label="Nom" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="typeEvenement"
              label="Type d'evenement"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="duree"
              label="Durée (en heures)"
              type="number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="nombrePersonnes"
              label="Nombre de personnes"
              type="number"
              required
              class="text-white"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-date-input label="Date input" v-model="date"> </v-date-input>
          </v-col>

          <v-col cols="12" sm="6" color="#24292D">
            <v-text-field
              v-model="prix"
              label="Prix"
              type="number"
              suffix="€"
              disabled
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn type="submit" color="primary" block> Reserver </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>

    <!-- Message de confirmation -->
    <v-dialog v-model="confirmationDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Réservation confirmée</v-card-title>
        <v-card-text>
          Merci, votre réservation a été enregistrée avec succès.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="confirmationDialog = false">
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import axios from "axios";

export default {
  name: "ReservationPage",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      nom: "",
      typeEvenement: "",
      date: null,
      duree: "1",
      nombrePersonnes: "1",
      prix: "5",
      confirmationDialog: false,
    };
  },
  watch: {
    nombrePersonnes: function (value) {
      this.prix = parseFloat(this.duree) * value * 5;
    },
    duree: function (value) {
      this.prix = parseInt(this.nombrePersonnes) * value * 5;
    },
  },
  methods: {
    async submitReservation() {
      /* try { */
      if (this.date) {
        this.date = new Date(this.date).toISOString();
      }

      try {
        const response = await axios.post(
          "http://localhost:3000/reservation-salle",
          JSON.stringify({
            nom: this.nom,
            typeEvenement: this.typeEvenement,
            date: this.date,
            duree: this.duree,
            nombrePersonnes: this.nombrePersonnes,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        );
        const result = response.data;

        console.log("Réservation réussie :", result);

        // Afficher un message de confirmation
        this.confirmationDialog = true;

        // Réinitialiser le formulaire

        this.nom = "";
        this.typeEvenement = "";
        this.date = null;
        this.duree = "1";
        this.nombrePersonnes = "1";
        this.prix = "5";

        /* } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation :", error);
      alert("Une erreur est survenue lors de la réservation.");
    } */
      } catch (error) {
        console.error("Erreur lors de la réservation.", error);
      }
    },
  },
};
</script>
