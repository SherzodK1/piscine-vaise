<template>
  <v-container>
    <!-- Gestion des Utilisateurs -->
    <v-card>
      <v-card-title>Gestion des Utilisateurs</v-card-title>
      <v-card-text>
        <v-data-table
          :items="utilisateurs"
          :headers="userHeaders"
          item-value="Id_Utilisateur"
          class="elevation-1"
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun utilisateur trouvé."
        >
          <template #item.actions="{ item }">
            <v-btn color="blue" @click="editUser(item)" small icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              color="red"
              @click="deleteUser(item.Id_Utilisateur)"
              small
              icon
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <v-btn class="mt-3" color="primary" @click="showCreateModal = true">
          Ajouter un utilisateur
        </v-btn>
      </v-card-text>

      <!-- Modal pour créer ou modifier un utilisateur -->
      <v-dialog v-model="showCreateModal" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{
              editMode ? "Modifier un utilisateur" : "Ajouter un utilisateur"
            }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formUserRef" v-model="valid">
              <v-text-field
                v-model="formUser.nom"
                label="Nom"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="formUser.adresseMail"
                label="Email"
                type="email"
                required
                :rules="[rules.required, rules.email]"
              ></v-text-field>
              <v-text-field
                v-model="formUser.numeroTelephone"
                label="Téléphone"
              ></v-text-field>
              <v-text-field
                v-model="formUser.motDePasse"
                label="Mot de passe"
                type="password"
                v-if="!editMode"
                :rules="[rules.required]"
              ></v-text-field>
              <v-checkbox
                v-model="formUser.estAdmin"
                label="Admin ?"
              ></v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeModal"
              >Annuler</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="blue darken-1"
              text
              @click="saveUser"
            >
              {{ editMode ? "Mettre à jour" : "Ajouter" }}
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
      utilisateurs: [],
      loading: true,
      error: null,
      showCreateModal: false,
      showCreateCourseModal: false,
      editMode: false,
      valid: false,
      formUser: {
        Id_Utilisateur: null,
        nom: "",
        adresseMail: "",
        numeroTelephone: "",
        motDePasse: "",
        estAdmin: false,
      },
      userHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Email", value: "adresseMail" },
        { text: "Téléphone", value: "numeroTelephone" },
        { text: "Admin", value: "estAdmin", align: "center" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
      rules: {
        required: (v) => !!v || "Ce champ est requis",
        email: (v) => /.+@.+\..+/.test(v) || "Adresse email invalide",
      },
    };
  },
  async created() {
    await this.fetchUsers();
  },
  methods: {
    // Gestion des utilisateurs
    async fetchUsers() {
      try {
        this.loading = true;
        const response = await api.getUtilisateurs();
        this.utilisateurs = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async saveUser() {
      try {
        if (this.editMode) {
          const { motDePasse, ...userData } = this.formUser;
          await api.updateUtilisateur(this.formUser.Id_Utilisateur, userData);
        } else {
          await api.createUtilisateur(this.formUser);
        }
        await this.fetchUsers();
        this.closeModal();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteUser(id) {
      try {
        await api.deleteUtilisateur(id);
        await this.fetchUsers();
      } catch (err) {
        this.error = err.message;
      }
    },
    editUser(user) {
      this.formUser = { ...user };
      this.editMode = true;
      this.showCreateModal = true;
    },
    closeModal() {
      this.showCreateModal = false;
      this.editMode = false;
    },
  },
};
</script>
