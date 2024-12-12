<script setup>
import { login } from './login.js'
</script>

<template>
  <v-app-bar app color="#24292D">
    <v-img height="60" src="@/assets/logoAtlantis.svg" />
    <v-spacer></v-spacer>
    <v-btn to="/forfait">Forfait</v-btn>
    <v-btn to="/equipement">Equipements</v-btn>
    <v-btn to="/cours">Cours</v-btn>
    <v-btn to="/evenement">Evénements</v-btn>
    <v-btn @click="handleReservation" >Réservation</v-btn>
    <AppLogin/>
  </v-app-bar>
</template>
<script>

//import AppLogin from './AppLogin.vue';
import AppLogin from './AppLogin.vue';

export default {
  components: { AppLogin },
  data: () => ({
    showLoginPopup: false, // Controlar la visibilidad del popup
  }),
  methods: {
    handleReservation() {
      if (!login.authenticated) {
        this.showLoginPopup = true; // Mostrar popup de login
      } else {
        this.$router.push('/reservationSalle'); // Redirigir si está autenticado
      }
    },
  },
};
</script>