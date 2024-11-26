<template>
  <div>
    <AppHeader />
    <v-main>  
      <!-- Section Équipements -->
      <v-container fluid class="my-8 bg-blue-darken-4 py-12">
        <h2 class="text-center white--text mb-8 text-h4">
          Événements
        </h2>
        <v-row>
          <v-col
            v-for="equipe in equipements"
            :key="equipe.id"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6"
          >
            <v-card class="text-center rounded-lg" outlined>
              <v-img
                :src="equipe.imageUrl || `https://picsum.photos/400/400?random=${equipe.id}`"
                height="200"
                cover
              ></v-img>
              <v-card-title class="text-h5">{{ equipe.title }}</v-card-title>
              <v-card-text>
                <p>Description : {{ equipe.description }}</p>
                <p>Quantité totale : {{ equipe.quantTotal }}</p>
                <p>Quantité actuelle : {{ equipe.quantActuelle }}</p>
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
import AppHeader from "@/components/AppHeader.vue"; // Remplacez par le chemin réel vers votre composant

export default {
  name: "EquipementsPage",

  components: {
    AppHeader, // Ajoutez votre composant header ici
  },

  data() {
    return {
      equipements: [], // Liste des équipements récupérés depuis l'API
    };
  },
  created() {
    // Récupérer les équipements depuis l'API
    fetch('http://localhost:3000/api/equipements') // Assurez-vous que l'API est lancée sur ce port
      .then(response => response.json())
      .then(data => {
        this.equipements = data;
      })
      .catch(error => console.error("Erreur lors de la récupération des équipements : ", error));
  },
};
</script>

<style scoped>
</style>
