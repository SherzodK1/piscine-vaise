<template class="bg-white">
 <AppHeader/>
<v-container fluid class="my-8 bg-blue-darken-4 py-12">
      <h2 class="text-center white--text mb-8 text-h4">
        Nos cours adaptés à tous les goûts
      </h2>
      <v-row>
        <v-col
          v-for="cours in cours"
          :key="cours.id"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center mb-6"
        >
          <v-card class="text-center rounded-lg" outlined>
            <v-img
              :src="`https://picsum.photos/400/400?random=${cours.id}`"
              height="200"
              cover
            ></v-img>
            <v-card-title class="text-h5">{{ cours.title }}</v-card-title>
            <v-card-text>
              <p>Description : {{ cours.description }}</p>
              <p>Capacité : {{ cours.capacite }}</p>
              <p>Places restantes : {{ cours.placesRestantes }}</p>
              <p>Intervenant : {{ cours.intervenant }}</p>
              <p>Horaire : {{ cours.Horaire }}</p>
              <p>Date : {{ cours.date }}</p>
              <p>Lieu : {{ cours.lieu }}</p>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
  <v-btn color="primary" href="coursreglement">Plus d'informations</v-btn>
</v-card-actions>


          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Section Footer -->
    <AppFooter/>
</template>

<script>
export default {
  name: "CoursPage",
  data() {
    return {
      cours: [
        {
          id: 1,
          title: "Initiation au surf",
          description: "Cours d'initiation au surf, ouvert à tous",
          capacite: 30,
          placesRestantes: 8,
          intervenant: "Patrick Grosjean",
          Horaire: "13h00 à 14h00",
          date: "20/10/2024",
          lieu: "Piscine B",
        },
        {
          id: 2,
          title: "Plongeon",
          description:
            "Cours d'apprentissage des différentes méthodes de plongeon",
          capacite: 16,
          placesRestantes: 8,
          intervenant: "Robert Asgard",
          Horaire: "8h30 à 10h00",
          date: "14/10/2024",
          lieu: "Piscine A",
        },
        {
          id: 3,
          title: "Water-polo",
          description: "Cours d'entraînement pour l'équipe U11",
          capacite: 30,
          placesRestantes: 17,
          intervenant: "Patrick Grosjean",
          Horaire: "18h30 à 20h00",
          date: "13/10/2024",
          lieu: "Piscine C",
        },
        {
          id: 4,
          title: "Cours en salle",
          description: "Cours en salle avec un coach sportif",
          capacite: 30,
          placesRestantes: 28,
          intervenant: "Patrick Grosjean",
          Horaire: "13h00 à 14h00",
          date: "19/10/2024",
          lieu: "Salle 301",
        },
        {
          id: 5,
          title: "Musculation",
          description:
            "Cours de musculation avec machines de course et d'haltérophilie",
          capacite: 14,
          placesRestantes: 3,
          intervenant: "David Fernandes",
          Horaire: "13h00 à 14h00",
          date: "24/10/2024",
          lieu: "Salle 302",
        },
        {
          id: 6,
          title: "Yoga",
          description: "Séances pour améliorer votre souplesse et votre zen",
          capacite: 30,
          placesRestantes: 8,
          intervenant: "Marie Laurent",
          Horaire: "13h00 à 14h00",
          date: "23/10/2024",
          lieu: "Salle Zen",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
