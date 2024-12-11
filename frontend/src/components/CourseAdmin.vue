<template>
  <v-container>
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
  </v-container>
</template>
<script>
import api from "../components/apiAdmin";
export default {
  data() {
    return {
      cours: [],
      salles: [],
      loading: true,
      error: null,
      showCreateCourseModal: false,
      editCourseMode: false,
      valid: false,

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
      coursHeaders: [
        { text: "Nom", value: "nom" },
        { text: "Intervenant", value: "interventeur" },
        { text: "Durée", value: "duree" },
        { text: "Places", value: "places" },
        { text: "Horaire", value: "horaire" },
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
    await this.fetchCours();
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
  },
};
</script>
