<script setup>
import { login } from "./login.js";
</script>

<template>
  <v-app-bar app color="#24292D">
    <a href="/accueil" class="logo">
      <img height="60" src="@/assets/logoAtlantis.svg" alt="Logo Atlantis" />
    </a>
    <v-spacer></v-spacer>
    <v-btn to="/forfait">Forfait</v-btn>
    <v-btn to="/equipement">Equipement</v-btn>
    <v-btn to="/cours">Cours</v-btn>
    <v-btn to="/evenement">Evénement</v-btn>
    <v-btn @click="handleReservation">Réservation</v-btn>
    <v-btn v-if="isAdmin" to="/admin">Admin</v-btn>
    <AppLogin />
  </v-app-bar>
</template>
<script>

import AppLogin from "./AppLogin.vue";

export default {
  components: { AppLogin },
  data: () => ({
    showLoginPopup: false, // Controlar la visibilidad del popup
    isAdmin: false,
    user: null,
  }),
  async created() {
     
      
      this.isAdmin = login.user.estAdmin;
    
  },
  methods: {
    handleReservation() {
      if (!login.authenticated) {
        this.showLoginPopup = true; // Mostrar popup de login
      } else {
        this.$router.push("/reservationSalle"); // Redirigir si está autentificado
      }
    },
  },
};
</script>
