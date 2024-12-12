<template>
    <div>
      <AppHeader />
      <v-main>
        <v-container>
          <v-card v-if="cours" outlined>
            <v-img :src="getImageUrl(cour.imageBytes)" height="400px" cover></v-img>
            <v-card-title class="text-h5">{{ cour.nom }}</v-card-title>
            <v-card-text>
              <p><strong>Type :</strong> {{ cour.type }}</p>
              <p><strong>Places restantes :</strong> {{ cour.places }} heures</p>
              <p><strong>Salle :</strong> {{ cour.Id_Salle }} </p>
              <p><strong>Intervenant :</strong> {{ cour.interventeur }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="reserver">Réserver</v-btn>
            </v-card-actions>
          </v-card>
          <div v-else>Chargement des détails...</div>
        </v-container>
      </v-main>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from "@/components/AppHeader.vue";
  import AppFooter from "@/components/AppFooter.vue";
  import api from "@/components/apicours";
  
  export default {
    name: "CoursDetail",
    components: { AppHeader, AppFooter },
    data() {
      return {
        cours: null,
      };
    },
    methods: {
      async fetchCours() {
        try {
          const id = this.$route.params.id;
          if (!id) {
            console.error("ID non fourni dans les paramètres de la route");
            this.$router.push({ name: "Home" }); // Redirige si l'ID est manquant
            return;
          }
          const response = await api.getCoursById(id);
          this.cours = response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération du courq :", error);
        }
      },
      reserver() {
        // Utilisation de id_Courq au lieu de id
        this.$router.push({
          name: "ReservationPage",
          query: { idCours: this.cours.id_Cours },
        });
      },
      getImageUrl(byteArray) {
        if (!byteArray) return "https://via.placeholder.com/400";
        const blob = new Blob([byteArray], { type: "image/jpeg" });
        return URL.createObjectURL(blob);
      },
    },
    created() {
      this.fetchCours();
    },
  };
  </script>
  
  <style scoped>
  .v-main {
    background-color: #121212;
  }
  </style>
  