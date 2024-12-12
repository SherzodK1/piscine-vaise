<template>
  <v-container>
    <!-- Gestion des Espaces -->
    <v-card>
      <v-card-title>Gestion des Espaces</v-card-title>
      <v-card-text>
        <v-data-table
          :items="espaces"
          :headers="espaceHeaders"
          item-value="Id_Espace"
          class="elevation-1"
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun espace trouvé."
        >
          <template #item.actions="{ item }">
            <v-btn color="blue" @click="editEspace(item)" small icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="red" @click="deleteEspace(item.Id_Espace)" small icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <v-btn
          class="mt-3"
          color="primary"
          @click="showCreateEspaceModal = true"
        >
          Ajouter un Espace
        </v-btn>
      </v-card-text>

      <!-- Modal pour créer ou modifier un espace -->
      <v-dialog v-model="showCreateEspaceModal" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{
              editEspaceMode ? "Modifier un espace" : "Ajouter un espace"
            }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formEspaceRef" v-model="valid">
              <v-text-field
                v-model="formEspace.nom"
                label="Nom"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="formEspace.duree"
                label="Durée"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEspace.places"
                label="Places"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEspace.prix"
                label="Prix"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEspaceModal"
              >Annuler</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="blue darken-1"
              text
              @click="saveEspace"
            >
              {{ editEspaceMode ? "Mettre à jour" : "Ajouter" }}
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
      espaces: [],
      loading: true,
      error: null,
      showCreateEspaceModal: false,
      editEspaceMode: false,
      valid: false,
      formEspace: {
        Id_Espace: null,
        nom: "",
        duree: "",
        places: "",
        prix: "",
      },
      espaceHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Duree", value: "duree" },
        { text: "Places", value: "places" },
        { text: "Prix", value: "prix" },
        { text: "Utilisateur", value: "Id_Utilisateur" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
      rules: {
        required: (v) => !!v || "Ce champ est requis",
        email: (v) => /.+@.+\..+/.test(v) || "Adresse email invalide",
      },
    };
  },
  async created() {
    await this.fetchEspace();
  },
  methods: {
    async fetchEspace() {
      try {
        this.loading = true;
        const response = await api.getEspaces();
        this.espaces = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },

    async saveEspace() {
      try {
        if (this.editEspaceMode) {
          await api.updateEspace(this.formEspace.Id_Espace, this.formEspace);
        } else {
          await api.createEspace(this.formEspace);
        }
        await this.fetchEspace();
        this.closeEspaceModal();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteEspace(id) {
      try {
        await api.deleteEspace(id);
        await this.fetchEspace();
      } catch (err) {
        this.error = err.message;
      }
    },
    editEspace(espace) {
      this.formEspace = { ...espace };
      this.editEspaceMode = true;
      this.showCreateEspaceModal = true;
    },
    closeEspaceModal() {
      this.showCreateEspaceModal = false;
      this.editEspaceMode = false;
    },
  },
};
</script>
