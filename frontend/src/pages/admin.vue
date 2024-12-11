<template>
  <AppHeader />
  <userAdmin />
  <CourseAdmin />
  <EventAdmin />
  <EquipmentAdmin />
  <SpaceAdmin />
</template>

<script>
import api from "../components/apiAdmin";
import userAdmin from "@/components/userAdmin.vue";
import CourseAdmin from "@/components/CourseAdmin.vue";
import EventAdmin from "@/components/EventAdmin.vue";
import EquipmentAdmin from "@/components/EquipmentAdmin.vue";
import SpaceAdmin from "@/components/SpaceAdmin.vue";
import AppHeader from "@/components/AppHeader.vue";

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
