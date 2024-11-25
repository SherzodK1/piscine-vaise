<template>
    <!-- Main Content -->
    <v-main>
      <!-- Section de bienvenue -->
      <v-container fluid class="my-8 py-12 bg-blue-darken-4">
        <h2 class="text-center white--text mb-8 text-h4">BIENVENUE JEAN-MAURICE SIMEONE</h2>
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
                      src="https://source.unsplash.com/featured/?person"
                      alt="Photo de profil Jean-Maurice Simeone"
                    />
                  </v-avatar>
                </v-col>
                <!-- Informations Profil -->
                <v-col cols="12" sm="8" class="d-flex flex-column justify-center">
                  <h3>Jean-Maurice Simeone</h3>
                  <p>Adresse : All. Pierre de Coubertin, 69007 Lyon</p>
                  <p>Abonnement : Premium</p>
                  <p>Depuis : 10/09/2024</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Section Activités -->
      <v-container>
        <h2 class="text-center">Mes activités favorites :</h2>
        <v-row align="center" justify="center" class="my-6">
          <v-col cols="12" sm="8" md="6">
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-weight-lifter</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>1er : Musculation</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="success">mdi-yoga</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>2ème : Yoga</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue">mdi-surfing</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>3ème : Surf</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <!-- Section Actions -->
      <v-container>
        <v-row justify="center">
          <v-btn color="primary" class="mx-2">Accueil</v-btn>
          <v-btn color="success" class="mx-2">Voir mes réservations</v-btn>
          <v-btn outlined color="error" class="mx-2">Gérer mon profil/abonnement</v-btn>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="pa-6 bg-grey-darken-4 white--text">
      <div class="d-flex justify-between align-center">
        <div>
          <p>Copyright 2024 Spider Web Tech</p>
          <p>Contactez-nous : +33 4 72 45 78 90</p>
          <p>Adresse : 36 avenue Sidoine Apollinaire, 69009 Lyon France</p>
        </div>
        <div class="d-flex">
          <a href="https://www.facebook.com/villedelyon" class="white--text mx-2">Facebook</a>
          <a href="https://twitter.com/villedelyon" class="white--text mx-2">Twitter</a>
          <a href="https://www.instagram.com/villedelyon/" class="white--text mx-2">Instagram</a>
          <a href="https://fr.linkedin.com/company/ville-de-lyon" class="white--text mx-2">LinkedIn</a>
        </div>
      </div>
    </v-footer>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>

<style scoped></style>
