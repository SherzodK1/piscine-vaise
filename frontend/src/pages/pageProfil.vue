<template>
 <AppHeader/>
    <!-- Main Content -->
    <v-main>
      <!-- Section de bienvenue -->
      <v-container fluid class="my-8 py-12 bg-blue-darken-4">
        <h2 class="text-center white--text mb-8 text-h4 text-uppercase">Bienvenue {{ userProfile?.nom || "Nom indisponible" }}</h2>
      </v-container>

      <!-- Section Profil -->
      <v-container class="mb-12">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card elevation="2" class="pa-6">
              <v-row>              
                <!-- Informations Profil -->              
                
                <v-col cols="12" sm="8" class="d-flex flex-column justify-center">
                  <!--aller chercher a la db le nom de l'utilisateur si est connecté pour l'afficher-->
                  <h3 class="pb-5"> {{ userProfile?.nom || "Nom indisponible" }} </h3>
                  
                  <v-form v-if="userProfile">
                    <v-text-field v-model="userProfile.email" label="Email"></v-text-field>
                    <v-text-field v-model="userProfile.numeroTelephone" label="Téléphone"></v-text-field>
                    <v-text-field v-model="newPassword" label="Nouveau mot de passe" type="password"></v-text-field>
                    <v-btn color="primary" @click="updateProfile()">Mettre à jour</v-btn>
                  </v-form>
                  <!--<div v-if="userProfile">-->
                    <p class="pt-4">Forfait : </p>
                <!-- </div> -->
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
        <h2 class="text-center">Mes Reservations</h2>              
        
      </v-container>
      
      <v-btn  to="/accueil" color="primary" class="mx-2 justify-center">Accueil</v-btn>
    </v-main>

    <!-- Footer -->
     <AppFooter/>
</template>

<script>
  import axios from 'axios';

export default {
  name: "ProfilePage",

  data() {
    return {
      userProfile: null,
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/profil', {
          headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        });
      this.userProfile = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
    }
  },
  methods: {
    
  async updateProfile() {
    try {
      await axios.put('http://localhost:3000/profil', {
        
        email: this.userProfile.email,
        numeroTelephone: this.userProfile.numeroTelephone,
        motDePasse: this.newPassword,
        
      },
      {
          headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        });
      alert('Profil mis à jour avec succès');
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  }, 
  
  }
};

  

</script>

<style scoped></style>
