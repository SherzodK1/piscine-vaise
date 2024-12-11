<template>
  <v-container>
    <!-- Gestion des Evenements -->
    <v-card>
      <v-card-title>Gestion des Evenements</v-card-title>
      <v-card-text>
        <v-data-table
          :items="evenements"
          :headers="evenHeaders"
          item-value="Id_Evenement"
          class="elevation-1"
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun événement trouvé."
        >
          <template #item.actions="{ item }">
            <v-btn color="blue" @click="editEvenement(item)" small icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              color="red"
              @click="deleteEvenement(item.Id_Evenement)"
              small
              icon
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <v-btn
          class="mt-3"
          color="primary"
          @click="showCreateEventModal = true"
        >
          Ajouter un événement
        </v-btn>
      </v-card-text>

      <!-- Modal pour créer ou modifier un événement -->
      <v-dialog v-model="showCreateEventModal" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{
              editEventMode ? "Modifier un événement" : "Ajouter un événement"
            }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formEventRef" v-model="valid">
              <v-text-field
                v-model="formEvent.nom"
                label="Nom"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="formEvent.description"
                label="Description"
              ></v-text-field>
              <v-text-field
                v-model="formEvent.duree"
                label="Durée"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEvent.places"
                label="Places"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEvent.dateHeureEvenement"
                label="date Heure Evenement"
                type="datetime-local"
              ></v-text-field>
              <v-text-field
                v-model="formEvent.image"
                label="Image"
              ></v-text-field>
              <v-text-field
                v-model="formEvent.Id_Salle"
                label="Salle"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEventModal"
              >Annuler</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="blue darken-1"
              text
              @click="saveEvent"
            >
              {{ editEventMode ? "Mettre à jour" : "Ajouter" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>
<script>
import api from "../components/apiAdmin";

export default {
  data() {
    return {
      evenements: [],
      salles: [],
      loading: true,
      error: null,
      showCreateEventModal: false,
      editEventMode: false,
      valid: false,
      formEvent: {
        Id_Evenement: null,
        nom: "",
        interventeur: "",
        description: "",
        duree: "",
        places: "",
        dateHeureEvenement: "",
        image: "",
        Id_Salle: "",
      },
      evenHeaders: [
        { text: "Nom", value: "nom" },
        { text: "description", value: "description" },
        { text: "Duree", value: "duree" },
        { text: "Places", value: "places" },
        { text: "Date Heure Evenement", value: "dateHeureEvenement" },
        { text: "image", value: "image" },
        { text: "Salle", value: "Id_Salle" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
      rules: {
        required: (v) => !!v || "Ce champ est requis",
        email: (v) => /.+@.+\..+/.test(v) || "Adresse email invalide",
      },
    };
  },
  async created() {
    await this.fetchEvenements();
    await this.fetchSalles();
  },
  methods: {
    async fetchSalles() {
      try {
        this.loading = true;
        const response = await api.getSalles();
        this.salles = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    // Gestion des évènements
    async fetchEvenements() {
      try {
        this.loading = true;
        const response = await api.getEvenements();
        this.evenements = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async saveEvent() {
      try {
        if (this.editEventMode) {
          await api.updateEvenement(
            this.formEvent.Id_Evenement,
            this.formEvent
          );
        } else {
          await api.createEvenement(this.formEvent);
        }
        await this.fetchEvenements();
        this.closeEventModal();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteEvenement(id) {
      try {
        await api.deleteEvenement(id);
        await this.fetchEvenements();
      } catch (err) {
        this.error = err.message;
      }
    },
    editEvenement(event) {
      this.formEvent = { ...event };
      this.editEventMode = true;
      this.showCreateEventModal = true;
    },
    closeEventModal() {
      this.showCreateEventModal = false;
      this.editEventMode = false;
    },
  },
};
</script>
