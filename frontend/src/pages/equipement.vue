<template>
  <div class="bg-grey-darken-4">
    <AppHeader />
    <!-- Section Hero -->
    <v-img
      src="https://i.goopics.net/wi7nug.jpg"
      max-height="600px"
      cover
      class="d-flex justify-start align-center mb-14"
    >
      <v-container
        class="bg-grey-darken-4 text-center d-flex flex-column align-center justify-start rounded-pill opacity-80 py-6 px-8"
      >
        <h1 class="text-h3 white--text">Nos Équipements</h1>
        <p class="white--text ma-2">
          Explorez notre large gamme d'équipements pour vos activités sportives.
        </p>
      </v-container>
    </v-img>

    <!-- Section Équipements -->
    <v-container fluid class="my-14 bg-blue-darken-4 py-12">
      <h2 class="text-center white--text mb-8 text-h4">
        Équipements disponibles
      </h2>

      <!-- Chargement ou Erreur -->
      <div v-if="loading" class="text-center white--text">
        Chargement des équipements...
      </div>
      <div v-if="error" class="text-center red--text">Erreur : {{ error }}</div>

      <!-- Liste des équipements -->
      <v-row v-if="equipement && equipement.length > 0">
        <v-col
          v-for="equipement in equipement"
          :key="equipement.Id_Equipement"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center mb-6"
        >
          <v-card class="text-center rounded-lg" outlined>
            <v-img
              :src="equipement.image"
              height="200"
              width="250"
              cover
            ></v-img>
            <v-card-title class="text-h5">{{ equipement.nom }}</v-card-title>
            <v-card-text> </v-card-text>
            <v-btn class="mb-4" @click="openDialog(equipement)" color="primary">
              Détails
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Message si aucun équipement -->
      <div v-else class="text-center white--text">
        Aucun équipement disponible pour le moment.
      </div>

      <!-- Dialog de détails -->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-img :src="selectedEquipement.image" height="250" cover></v-img>
          <v-card-title class="text-h5">{{
            selectedEquipement?.nom
          }}</v-card-title>
          <v-card-text>
            <p><strong>Type :</strong> {{ selectedEquipement?.type }}</p>
            <p>
              <strong>Durée :</strong> {{ selectedEquipement?.duree }} heures
            </p>
            <p><strong>Date :</strong> {{ selectedEquipement?.createdAt }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="dialog = false">Fermer</v-btn>
            <v-btn text color="primary" @click="dialogReserve = true"
              >Réserver</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--dialogReserve-->
      <v-dialog v-model="dialogReserve" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h6">Reserver</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formEquipementtRef" v-model="valid">
              <v-text-field
                v-model="empreint.duree"
                label="Durée"
                required
              ></v-text-field>
              <v-date-input
                label="Date d'empreint"
                v-model="empreint.dateEmpreint"
              >
              </v-date-input>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialogReserve = false"
              >Annuler</v-btn
            >
            <v-btn color="blue darken-1" text @click="reserver()">
              Reserver
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import api from "@/components/apiequipement.js";

export default {
  name: "EquipementsPage",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      user: [],
      equipement: [],
      empreint: {
        Id_Equipement: null,
        Id_Utilisateur: null,
        duree: null,
        dateEmpreint: null,
        // Remplacer par l'id de l'utilisateur connecté
      },
      loading: true,
      error: null,
      dialog: false,
      dialogReserve: false, // Ajouter une variable pour le dialog de réservation
      selectedEquipement: null,
    };
  },
  methods: {
    async fetchEquipements() {
      try {
        const response = await api.getEquipement();
        this.equipement = response.data;
        this.ImageUrl = this.equipement.image;
        console.log(this.equipement);
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    openDialog(equipement) {
      this.selectedEquipement = equipement;
      this.dialog = true;
    },
    openDialogReserve() {
      this.dialogReserve = true;
    },

    async reserver() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.empreint.Id_Equipement = this.selectedEquipement.Id_Equipement;
      this.empreint.Id_Utilisateur = this.user.Id_Utilisateur;
      this.dialogReserve = false;
      console.log("1",this.selectedEquipement);
      console.log("2",this.empreint.Id_Equipement);
      console.log("3",this.empreint.Id_Utilisateur);
      try {
        await api.empreintEquipement(this.empreint);
        alert("Vous venez de louer 1 équipement !");
      } catch (err) {
        this.error = err.message;
      }
      
    },
  },
  async created() {
    await this.fetchEquipements();
  },
};
</script>

<style scoped>
.v-main {
  background-color: #121212;
}

.v-container {
  padding: 0 24px;
}

.v-card {
  transition: transform 0.2s ease-in-out;
}

.v-card:hover {
  transform: scale(1.05);
}

.red--text {
  color: red;
}
</style>
