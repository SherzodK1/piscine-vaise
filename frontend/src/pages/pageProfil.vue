<template>
  <AppHeader />
  <!-- Main Content -->
  <v-main>
    <!-- Section de bienvenue -->
    <v-container fluid class="my-8 py-12 bg-blue-darken-4">
      <h2 class="text-center white--text mb-8 text-h4 text-uppercase">
        Bienvenue {{ userProfile?.nom || "Nom indisponible" }}
      </h2>
    </v-container>

    <!-- Section Profil -->
    <v-container class="mb-12">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card elevation="2" class="pa-6">
            <v-row>
              <!-- Informations Profil -->
              <v-col cols="12" sm="8" class="d-flex flex-column justify-center">
                <h3 class="pb-5">{{ userProfile?.nom || "Nom indisponible" }}</h3>
                <v-form v-if="userProfile">
                  <v-text-field
                    v-model="userProfile.email"
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    v-model="userProfile.numeroTelephone"
                    label="Téléphone"
                  ></v-text-field>
                  <v-text-field
                    v-model="newPassword"
                    label="Nouveau mot de passe"
                    type="password"
                  ></v-text-field>
                  <v-btn color="primary" @click="updateProfile()"
                    >Mettre à jour</v-btn
                  >
                </v-form>
                <!-- <p class="pt-4">Forfait :</p> -->
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
                <v-list-item-title>3ème : Piscine</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>

    <!-- Section Actions -->
    
    <h1 class="text-center">Mes réservations</h1>
    <v-container class="bg-blue-darken-4 w-66 my-5">

      <v-card-text>        
        <h2 class="text-center mb-5">Espaces</h2>
        <v-data-table 
          class="elevation-1 "        
          :items="reservationEspace"
          :headers="reservationHeaders"
          item-value="Id_Espace"          
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun espace trouvé."          
        >
      </v-data-table>
      </v-card-text>
      
      <h2 class="text-center">Evenements</h2>
      <v-card-text>
        <v-data-table 
          class="elevation-1 "        
          :items="reservationEvenement"
          :headers="evenementHeader"
          item-value="Id_Evenement"          
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun evenement trouvé."
          
        ></v-data-table>
      </v-card-text>

      <h2 class="text-center">Cours</h2>
      <v-card-text>
        <v-data-table 
          class="elevation-1 "        
          :items="reservationCours"
          :headers="coursHeader"
          item-value="Id_Cours"          
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun cours trouvé."
          
        ></v-data-table>
      </v-card-text>

      <h2 class="text-center">Equipements</h2>
      <v-card-text>
        <v-data-table 
          class="elevation-1 "        
          :items="reservationEquipements"
          :headers="equipementsHeader"
          item-value="Id_Equipements"          
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun equipement trouvé."
          
        ></v-data-table>
      </v-card-text>
    </v-container>

  
  </v-main>

  <!-- Footer -->
  <AppFooter />
</template>

<script>
import axios from "axios";

export default {
  name: "ProfilePage",

  data() {
    return {
      userProfile: null,
      reservationEspace: [], // Liste des équipements
      loading: true, // Indicateur de chargement
      error: null, // Variable pour les erreurs
      newPassword: "", // Nouveau mot de passe
      reservationHeaders: [
        { title: "Nom", value: "nom" },
        { title: "TypeEvenement", value: "typeEvenement" },
        { title: "Durée", value: "duree" },
        { title: "Places", value: "places" },
        { title: "Date", value: "date" },
        { title: "Prix", value: "prix" },
      ],
      reservationEvenement:[],
      evenementHeader:[
        { title: "Nom", value: "nom" },
        { title: "Durée", value: "duree" },
        { title: "Date et Heure", value: "dateHeureEvenement" },
        { title: "Salle", value: "Id_Salle" },
      ],
      reservationCours:[],
      coursHeader:[
        { title: "Nom", value: "nom" },
        { title: "Duree", value:"duree"},
        { title: "Interventeur", value: "interventeur" },
        { title: "Date", value: "dateCours" },
        { title: "Horaire", value: "horaire"},
        { title: "Salle", value: "Id_Salle" },
      ],
      reservationEquipements:[],
      equipementsHeader:[
        { title: "Nom", value: "nom" },
        { title: "Duree", value:"duree"},//prendre la duree de la table empreinter
        { title: "Type", value: "type" },
        { title: "Quantite", value: "quantite"},
        { title: "Date et Heure", value: "dateEmpreint" },
      ]
    };
  },

  async created() {
    // Charger les données utilisateur
    try {
      const profileResponse = await axios.get("http://localhost:3000/profil", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },  
      });
      this.userProfile = profileResponse.data;
      console.log("this.userProfile",this.userProfile)
      // Charger les données de l'espace
      await this.fetchEspace();
      await this.fetchEvenements();
      await this.fetchCours();
      await this.fetchEquipements();
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  },

  methods: {
    async fetchEspace() {
      try {
        this.loading = true;
        
        const response = await axios.get(`http://localhost:3000/espace`,
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          });

        this.reservationEspace = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchEvenements() {
      try {
        this.loading = true;
        
        const response = await axios.get(`http://localhost:3000/evenement`,
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          });

        this.reservationEvenement = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchCours() {
      try {
        this.loading = true;
        
        const response = await axios.get(`http://localhost:3000/cours`,
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          });

        this.reservationCours = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchEquipements() {
      try {
        this.loading = true;
        
        const response = await axios.get(`http://localhost:3000/equipements`,
        {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          });

        this.reservationEquipements = response.data.map(
        (empreinter) => {
          return {
            nom: empreinter.equipement.nom,
            quantite: empreinter.equipement.quantite,
            duree: empreinter.duree,
            dateEmpreint: empreinter.dateEmpreint,
            type: empreinter.equipement.type
            }
        }
      );
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async updateProfile() {
      try {
        await axios.put(
          "http://localhost:3000/profil",
          {
            email: this.userProfile.email,
            numeroTelephone: this.userProfile.numeroTelephone,
            motDePasse: this.newPassword,
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
          }
        );
        alert("Profil mis à jour avec succès");
      } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
      }
    },
  },
};
</script>

<style scoped></style>
