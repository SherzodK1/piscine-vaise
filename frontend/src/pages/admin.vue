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

    <!-- Gestion des Cours -->
    <v-card>
      <v-card-title>Gestion des Cours</v-card-title>
      <v-card-text>
        <v-data-table
          :items="cours"
          :headers="coursHeaders"
          item-value="Id_Cours"
          class="elevation-1"
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun cours trouvé."
        >
          <template #item.actions="{ item }">
            <v-btn color="blue" @click="editCours(item)" small icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="red" @click="deleteCours(item.Id_Cours)" small icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <v-btn
          class="mt-3"
          color="primary"
          @click="showCreateCourseModal = true"
        >
          Ajouter un cours
        </v-btn>
      </v-card-text>

      <!-- Modal pour créer ou modifier un cours -->
      <v-dialog v-model="showCreateCourseModal" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{
              editCourseMode ? "Modifier un cours" : "Ajouter un cours"
            }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formCourseRef" v-model="valid">
              <v-text-field
                v-model="formCourse.nom"
                label="Nom"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="formCourse.interventeur"
                label="Intervenant"
                required
              ></v-text-field>
              <v-text-field
                v-model="formCourse.description"
                label="Description"
              ></v-text-field>
              <v-text-field
                v-model="formCourse.duree"
                label="Durée"
                required
              ></v-text-field>
              <v-text-field
                v-model="formCourse.places"
                label="Places"
                required
              ></v-text-field>
              <v-text-field
                v-model="formCourse.horaire"
                label="Horaire"
                type="datetime-local"
              ></v-text-field>
              <v-text-field
                v-model="formCourse.image"
                label="Image"
              ></v-text-field>
              <v-text-field
                v-model="formCourse.Id_Salle"
                label="Salle"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeCourseModal"
              >Annuler</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="blue darken-1"
              text
              @click="saveCours"
            >
              {{ editCourseMode ? "Mettre à jour" : "Ajouter" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>

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
  <v-container>
    <!-- Gestion des Equipements -->
    <v-card>
      <v-card-title>Gestion des Equipements</v-card-title>
      <v-card-text>
        <v-data-table
          :items="equipements"
          :headers="equipmentHeaders"
          item-value="Id_Equipement"
          class="elevation-1"
          dense
          :loading="loading"
          loading-text="Chargement..."
          no-data-text="Aucun équipement trouvé."
        >
          <template #item.actions="{ item }">
            <v-btn color="blue" @click="editEquipment(item)" small icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn
              color="red"
              @click="deleteEquipment(item.Id_Equipement)"
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
          @click="showCreateEquipmentModal = true"
        >
          Ajouter un équipement
        </v-btn>
      </v-card-text>

      <!-- Modal pour créer ou modifier un équipement -->
      <v-dialog v-model="showCreateEquipmentModal" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h6">{{
              editEquipmentMode
                ? "Modifier un équipement"
                : "Ajouter un équipement"
            }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="formEquipmentRef" v-model="valid">
              <v-text-field
                v-model="formEquipment.nom"
                label="Nom"
                required
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="formEquipment.type"
                label="Type"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEquipment.quantite"
                label="Quantité"
                required
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="formEquipment.duree"
                label="Durée"
                required
              ></v-text-field>
              <v-text-field
                v-model="formEquipment.image"
                label="Image"
              ></v-text-field>
              <v-text-field
                v-model="formEquipment.Id_Utilisateur"
                label="Utilisateur"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEquipmentModal"
              >Annuler</v-btn
            >
            <v-btn
              :disabled="!valid"
              color="blue darken-1"
              text
              @click="saveEquipment"
            >
              {{ editEquipmentMode ? "Mettre à jour" : "Ajouter" }}
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
      cours: [],
      evenements: [],
      equipements: [],
      salles: [],
      equipements: [],
      loading: true,
      error: null,
      showCreateModal: false,
      showCreateCourseModal: false,
      showCreateEventModal: false,
      showCreateEquipmentModal: false,
      editEquipmentMode: false,
      editMode: false,
      editCourseMode: false,
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
      formEquipment: {
        Id_Equipement: null,
        nom: "",
        type: "",
        quantite: "",
        duree: "",
        image: "",
        Id_Utilisateur: "",
      },
      formCourse: {
        Id_Cours: null,
        nom: "",
        interventeur: "",
        description: "",
        duree: "",
        places: "",
        horaire: "",
        image: "",
        Id_Salle: "",
      },
      formUser: {
        Id_Utilisateur: null,
        nom: "",
        adresseMail: "",
        numeroTelephone: "",
        motDePasse: "",
        estAdmin: false,
      },
      formEquipment: {
        Id_Equipement: null,
        nom: "",
        type: "",
        quantit_: "",
        duree: "",
        image: "",
        Id_Utilisateur: "",
      },
      equipmentHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Type", value: "type" },
        { text: "Quantité", value: "quantit_" },
        { text: "Durée", value: "duree" },
        { text: "Image", value: "image" },
        { text: "Utilisateur", value: "Id_Utilisateur" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
      coursHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Intervenant", value: "interventeur" },
        { text: "Durée", value: "duree" },
        { text: "Places", value: "places" },
        { text: "Horaire", value: "horaire" },
        { text: "Salle", value: "Id_Salle" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
      userHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Email", value: "adresseMail" },
        { text: "Téléphone", value: "numeroTelephone" },
        { text: "Admin", value: "estAdmin", align: "center" },
        { text: "Actions", value: "actions", align: "center", sortable: false },
      ],
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
    await this.fetchUsers();
    await this.fetchCours();
    await this.fetchEvenements();
    await this.fetchEquipements();
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

    async fetchEquipements() {
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

    // Gestion des Cours
    async fetchCours() {
      try {
        this.loading = true;
        const response = await api.getCours();
        this.cours = response.data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
    async saveCours() {
      try {
        if (this.editCourseMode) {
          await api.updateCours(this.formCourse.Id_Cours, this.formCourse);
        } else {
          await api.createCours(this.formCourse);
        }
        await this.fetchCours();
        this.closeCourseModal();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteCours(id) {
      try {
        await api.deleteCours(id);
        await this.fetchCours();
      } catch (err) {
        this.error = err.message;
      }
    },
    editCours(course) {
      this.formCourse = { ...course };
      this.editCourseMode = true;
      this.showCreateCourseModal = true;
    },
    closeCourseModal() {
      this.showCreateCourseModal = false;
      this.editCourseMode = false;
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
        this.closeEvenementModal();
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
  // Gestion de l'équipement
  async fetchEquipments() {
    try {
      // Remplacer par l'appel API réel pour récupérer les équipements
      const response = api.getEquipements();
      this.equipements = response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des équipements", error);
    }
  },
  async saveEquipment() {
    try {
      if (this.editEventMode) {
        await api.updateEquipement(
          this.formEquipment.Id_Equipement,
          this.formEquipment
        );
      } else {
        await api.createEquipement(this.formEquipment);
      }
      await this.fetchEquipements();
      this.closeEquipementModal();
    } catch (err) {
      this.error = err.message;
    }
  },
  async deleteEquipement(id) {
    try {
      await api.deleteEquipement(id);
      await this.fetchEquipements();
    } catch (err) {
      this.error = err.message;
    }
  },
  editEquipment(equipment) {
    this.formEquipment = { ...equipment };
    this.editEquipmentMode = true;
    this.showCreateEquipmentModal = true;
  },
  closeEquipmentModal() {
    this.showCreateEquipmentModal = false;
    this.editEquipmentMode = false;
  },
};
</script>
