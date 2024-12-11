<script setup>
import { login } from './login.js'
</script>

<template>
    <div class="pa-4 text-center">
    
      <div class="mx-16">
        <!-- Si el usuario está autenticado -->
        <div v-if="login.authenticated">
        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="elevated" color="#00B4E7">
              Profil
            </v-btn>
          </template>
          <v-list class="m-2">
            <v-list-item to="/pageProfil">Profil</v-list-item>
            <v-list-item @click="logout()">
              <v-list-item-title>Se déconnecter</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
  
      <!-- Si el usuario no está autenticado -->
      <div v-else>
        <v-btn-group color="#00B4E7" density="comfortable" rounded="lg" divided>
          <v-btn variant="flat" @click="dialog = true">
            <div class="text-none font-weight-regular">
              SE CONNECTER
            </div>
          </v-btn>
        </v-btn-group>
      </div>
    </div>

      <!-- Popup de inicio de sesión -->
      <v-dialog v-model="dialog" max-width="500" class="rounded-xl">
        <v-card rounded="xl" color="#1A75BB">
          <div class="d-flex justify-end">
            <v-btn icon="mdi-close" size="x-large" variant="text" @click="dialog = false"></v-btn>
          </div>
          <v-card-title class="d-flex justify-space-between align-start">
            <v-img height="100" src="@/assets/logoAtlantis.svg" />
          </v-card-title>
  
          <v-card-text class="text-center">
            <div class="text-white font-weight-bold text-h5">
              Bienvenue
            </div>
            <div class="text-white mb-4">
              Connectez-vous ou créez un compte
            </div>
  
            <v-form v-model="form" @submit.prevent="onSubmit">
              <v-text-field
                v-model="email"
                :readonly="loading"
                :rules="[required]"
                class="text-black"
                bg-color="white"
                label="Email"
                clearable
              ></v-text-field>
  
              <v-text-field
                v-model="password"
                :readonly="loading"
                :rules="[required]"
                class="text-white"
                bg-color="white"
                label="Mot de passe"
                type="password"
                placeholder="Entrez votre mot de passe"
                clearable
              ></v-text-field>
  
              <v-btn
                size="large"
                class="font-weight-bold text-h6"
                text="Se connecter"
                type="submit"
                color="#00B4E7"
                variant="elevated"
                block
                :loading="loading"
              ></v-btn>
              <div class="mt-8">
                <a href="home" class="text-white">Mot de passe oublié ?</a>
              </div>
            </v-form>
  
            <AppInscription />
  
            <div class="text-medium-emphasis mb-1 text-body-2">
              En cliquant sur se connecter, vous acceptez nos conditions d’utilisation et notre
              politique de confidentialité
            </div>
          </v-card-text>
  
          <v-divider class="mt-2"></v-divider>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>

  
  export default {
    name: "AppLogin",

    props: {
      redirectToReservation: {
        type: Boolean,
        default: false, // Indica si el popup se abrió desde un intento de acceso a reservas
      },
    },
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
      dialog: false,
    }),
  
    watch: {
      // Si la propiedad `redirectToReservation` cambia, abrir el popup
      redirectToReservation(newValue) {
        if (newValue) this.dialog = true;
      },
    },
  
    methods: {
  async onSubmit() {
    if (!this.form) {
      return;
    }
    this.loading = true;

    try {
        await login.login(this.email, this.password);
        this.dialog = false;

        // Redirigir a la página original o a una predeterminada
        const redirectTo = this.$route.query.redirect || '/accueil';
        this.$router.push(redirectTo);
    } catch (error) {
      console.error('Login error:', error.response || error);
      alert('Erreur lors de la connexion. Veuillez vérifier vos informations.');
    } finally {
      this.loading = false;
    }
  },
  async logout() {
    await login.logout();
    this.$router.push("/accueil");
  }
}}
  </script>
  