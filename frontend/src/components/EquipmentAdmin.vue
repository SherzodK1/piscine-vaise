<template>
  <v-container>
    <!-- Gestion des Evenements -->
    <v-card>
      <v-card-title>Gestion des Equipements</v-card-title>
      <v-card-text>
        <v-data-table
          :items="equipements"
          :headers="equipementHeaders"
          item-value="Id_Equipement"
          class="elevation-1"
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun equipement trouvé."
        >
          <template #item.actions="{ item }">
            <v-btn color="blue" @click="editEquipement(item)" small icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              color="red"
              @click="deleteEquipement(item.Id_Equipement)"
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
          @click="showCreateEquipementModal = true"
        >
          Ajouter un équipement
        </v-btn>
      </v-card-text>

      <!-- Modal pour créer ou modifier un événement -->
      <v-dialog
        v-model="showCreateEquipementModal"
        persistent
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span class="text-h6">{{
              editEquipementMode
                ? "Modifier un équipement"
                : "Ajouter un équipement"
            }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formEquipementRef" v-model="valid">
              <v-text-field
                v-model="formEquipement.nom"
                label="Nom"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="formEquipement.duree"
                label="Durée"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEquipement.quantite"
                label="Quantite"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEquipement.image"
                label="Image"
              ></v-text-field>
              <v-text-field
                v-model="formEquipement.type"
                label="Type"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEquipementModal"
              >Annuler</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="blue darken-1"
              text
              @click="saveEquipement"
            >
              {{ editEquipementMode ? "Mettre à jour" : "Ajouter" }}
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
      equipements: [],
      loading: true,
      error: null,
      showCreateEquipementModal: false,
      editEquipementMode: false,
      valid: false,
      formEquipement: {
        Id_Equipement: null,
        nom: "",
        duree: "",
        quantite: "",
        image: "",
        type: "",
      },
      equipementHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Duree", value: "duree" },
        { text: "Quantite", value: "quantite" },
        { text: "image", value: "image" },
        { text: "Type", value: "type" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
      rules: {
        required: (v) => !!v || "Ce champ est requis",
        email: (v) => /.+@.+\..+/.test(v) || "Adresse email invalide",
      },
    };
  },
  async created() {
    await this.fetchequipements();
  },
  methods: {
    // Gestion des equipements
    async fetchequipements() {
      try {
        this.loading = true;
        const response = await api.getEquipements();
        this.equipements = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async saveEquipement() {
      try {
        if (this.editEventMode) {
          await api.updateEquipement(
            this.formEquipement.Id_Equipement,
            this.formEquipement
          );
        } else {
          await api.createEquipement(this.formEquipement);
        }
        await this.fetchequipements();
        this.closeEquipementModal();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteEquipement(id) {
      try {
        await api.deleteEquipement(id);
        await this.fetchequipements();
      } catch (err) {
        this.error = err.message;
      }
    },
    editEquipement(event) {
      this.formEquipement = { ...event };
      this.editEquipementMode = true;
      this.showCreateEquipementModal = true;
    },
    closeEquipementModal() {
      this.showCreateEquipementModal = false;
      this.editEquipementMode = false;
    },
  },
};
</script>
