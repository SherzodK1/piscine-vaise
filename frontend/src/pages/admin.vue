<template>
  <div class="bg-white">
    <v-container
      fluid
      class="d-flex justify-center text-center flex-column my-4 bg-white py-12 mb-16 text-h5"
    >
      <h1>Cette page est réservée à l’administration des données</h1>
      <p class="my-8">
        cliquez sur un des boutons pour afficher et modifier les données
        suivantes
      </p>

      <v-container class="d-flex flex-row justify-center">
        <v-btn-toggle background-color="primary" multiple>
          <v-btn
            color="primary"
            class="mx-4 rounded-lg"
            max-width="20%"
            @click="cours = !cours"
            >Cours</v-btn
          >
          <v-btn color="primary" class="mx-4 rounded-lg" max-width="20%"
            >Evénements</v-btn
          >
          <v-btn color="primary" class="mx-4 rounded-lg" max-width="20%"
            >équipements</v-btn
          >
          <v-btn color="primary" class="mx-4 rounded-lg" max-width="20%"
            >Réservation</v-btn
          >
          <v-btn color="primary" class="mx-4 rounded-lg" max-width="20%"
            >Profil</v-btn
          >
        </v-btn-toggle>
      </v-container>
    </v-container>
    <v-container
      v-if="cours"
      fluid
      class="d-flex justify-center my-4 bg-blue-darken-1 py-16"
    >
      <v-row>
        <v-col v-for="n in 3" :key="n" class="d-flex justify-center">
          <v-card class="text-center rounded-lg" light>
            <v-img
              src="https://picsum.photos/400/400?random=1"
              height="20%"
              cover
            ></v-img>
            <v-text-field
              class="text-h5"
              label="TITRE"
              variant="solo-filled"
            ></v-text-field>
            <v-textarea label="description" variant="solo-filled"></v-textarea>
            <v-container class="d-flex">
              <v-card-text>Capacité initiale :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center"
                type="number"
              />
            </v-container>
            <v-container class="d-flex">
              <v-card-text>places restantes :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center"
                type="number"
              />
            </v-container>
            <v-container class="d-flex">
              <v-card-text>Intervenant :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center"
                type="varchar"
              />
            </v-container>
            <v-container class="d-flex">
              <v-card-text>horaire :</v-card-text
              ><input
                class="bg-grey-darken-3 rounded text-center"
                type="hours"
              />
            </v-container>
            <v-container class="d-flex">
              <v-card-text> date :</v-card-text
              ><input
                class="bg-grey-darken-3 rounded text-center pr-2"
                type="date"
              />
              <v-container class="d-flex">
                <v-card-text>horaire :</v-card-text
                ><input class="bg-grey-darken-3 rounded text-center" type="d" />
              </v-container>
            </v-container>
            30 personnes places restantes : 28 personnes Intervenant : Patrick
            Grosjean horaire : 13h00 / 14h00 date : 20/10/2024 Lieu : salle 301
            <v-card-actions class="d-flex justify-center">
              <v-btn color="primary" to="/forfait"> En savoir plus </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";

const cours = ref(false);
</script>
