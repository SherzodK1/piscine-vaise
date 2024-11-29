<template>
  <AppHeader />
  <v-main>
    <!-- Section de bienvenue -->
    <v-container fluid class="my-8 py-12 bg-blue-darken-4">
      <h2 class="text-center white--text mb-8 text-h4">
        BIENVENUE {{ utilisateur.nom }} {{ utilisateur.prenom }}
      </h2>
    </v-container>

    <!-- Section Profil -->
    <v-container class="mb-12">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card elevation="2" class="pa-6">
            <v-row>
              <!-- Photo de Profil -->
              <v-col cols="12" sm="4">
                <v-avatar size="150">
                  <img
                    :src="utilisateur.image || 'https://source.unsplash.com/featured/?person'"
                    :alt="'Photo de profil ' + profile.nom"
                  />
                </v-avatar>
              </v-col>
              <!-- Informations Profil -->
              <v-col cols="12" sm="8" class="d-flex flex-column justify-center">
                <h3>{{ utilisateur.nom }} {{ utilisateur.prenom }}</h3>
                <p>Numéro de téléphone : {{ utilisateur.numeroTelephone }}</p>
                <p>Abonnement : {{ client.estAbonne ? 'Oui' : 'Non' }}</p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Section Activités -->
    <!-- (Ajouter ici les activités favorites si tu veux les afficher) -->

    <!-- Section Actions -->
    <v-container>
      <v-row justify="center">
        <v-btn color="primary" class="mx-2">Accueil</v-btn>
        <v-btn color="success" class="mx-2">Voir mes réservations</v-btn>
        <v-btn outlined color="error" class="mx-2">Gérer mon profil/abonnement</v-btn>
      </v-row>
    </v-container>
  </v-main>
  <AppFooter />
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      profile: {
        nom: "",
        prenom: "",
        numeroTelephone: "",
        image: "",
      },
      client: {
        abonne: false, // Indique si l'utilisateur est abonné ou non
      },
    };
  },
  mounted() {
    const userId = 1; // ID utilisateur à récupérer, change-le dynamiquement si nécessaire

    // Charger les informations utilisateur
    this.fetchUserData(userId);

    // Charger les informations client (abonnement)
    this.fetchClientData(userId);
  },
  methods: {
    // Méthode pour récupérer les données utilisateur
    async fetchUserData(userId) {
      try {
        const response = await fetch(`http://localhost:3000/api/utilisateur?id=${userId}`);
        const data = await response.json();
        if (data) {
          this.profile = data;
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur : ', error);
      }
    },

    // Méthode pour récupérer les données client (abonnement)
    async fetchClientData(userId) {
      try {
        const response = await fetch(`http://localhost:3000/api/client?id=${userId}`);
        const data = await response.json();
        if (data) {
          this.client = data;
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données client : ', error);
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez ici vos styles si nécessaire */
</style>
