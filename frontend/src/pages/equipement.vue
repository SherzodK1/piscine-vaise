<template>
  <div>
    <AppHeader />
    <v-main>
      <!-- Section Hero -->
      <v-img
        src="https://picsum.photos/400/400?random=5"
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
      <v-container fluid class="my-8 bg-blue-darken-4 py-12">
        <h2 class="text-center white--text mb-8 text-h4">
          Équipements disponibles
        </h2>

        <!-- Chargement ou Erreur -->
        <div v-if="loading" class="text-center white--text">
          Chargement des équipements...
        </div>
        <div v-if="error" class="text-center red--text">
          Erreur : {{ error }}
        </div>

        <!-- Liste des équipements -->
        <v-row v-if="equipement && equipement.length > 0">
          <v-col
            v-for="equipement in equipement"
            :key="equipement.id_Equipement"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6"
          >
            <v-card class="text-center rounded-lg" outlined>
              <v-img
                :src="getImageUrl(equipement.image)"
                height="200"
                cover
              ></v-img>
              <v-card-title class="text-h5">{{ equipement.nom }}</v-card-title>
              <v-card-text>
              </v-card-text>
              <v-btn @click="openDialog(equipement)" color="primary">
                Réserver
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
            <v-img :src="getImageUrl(selectedEquipement?.image)" height="300" cover></v-img>
            <v-card-title class="text-h5">{{ selectedEquipement?.nom }}</v-card-title>
            <v-card-text>
              <p><strong>Type :</strong> {{ selectedEquipement?.type }}</p>
              <p><strong>Durée :</strong> {{ selectedEquipement?.duree }} heures</p>
              <p><strong>Date :</strong> {{ selectedEquipement?.createdAt }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="dialog = false">Fermer</v-btn>
              <v-btn text color="primary" @click="reserver(selectedEquipement)">Réserver</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-main>
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
      equipement: [],
      loading: true,
      error: null,
      dialog: false,
      selectedEquipement: null,
    };
  },
  methods: {
    async fetchEquipements() {
      try {
        const response = await api.getEquipement();
        this.equipement = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    getImageUrl(byteArray) {
      if (!byteArray) return "https://via.placeholder.com/400";
      const blob = new Blob([byteArray], { type: "image/jpeg" });
      return URL.createObjectURL(blob);
    },
    openDialog(equipement) {
      this.selectedEquipement = equipement;
      this.dialog = true;
    },
    reserver(equipement) {
      if (equipement?.id_Equipement) {
        this.$router.push({
          name: "ReservationPage",
          query: { idEquipement: equipement.id_Equipement },
        });
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
