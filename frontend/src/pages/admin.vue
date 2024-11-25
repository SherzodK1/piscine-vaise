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
          <v-btn
            color="primary"
            class="mx-4 rounded-lg"
            max-width="20%"
            @click="evenements = !evenements"
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
    <v-container v-if="cours" fluid class="mt-16 bg-blue-darken-1 pt-10">
      <v-container
        fluid
        class="d-flex justify-center text-center flex-column text-h5"
        ><h1>Gestion des cours</h1>
      </v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          class="d-flex justify-center align-center"
        >
          <v-card class="text-center rounded-lg my-6" width="80%">
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
            <v-container class="d-flex flex-column">
              <v-card-text>Capacité initiale :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="number"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>places restantes :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="number"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>Intervenant :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="varchar"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>horaire :</v-card-text
              ><input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="hours"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text> date :</v-card-text
              ><input
                class="bg-grey-darken-3 rounded text-center pr-2 py-2"
                type="date"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>Lieu :</v-card-text
              ><input class="bg-grey-darken-3 rounded text-center py-2" />
            </v-container>
            <v-card-actions class="d-flex justify-center">
              <div class="text-center pa-4">
                <v-btn
                  @click="dialog = true"
                  color="primary"
                  variant="outlined"
                >
                  Open Dialog
                </v-btn>

                <v-dialog v-model="dialog" width="auto">
                  <v-card
                    prepend-icon="mdi-update"
                    text="Your application will relaunch automatically after the update is complete."
                    title="Update in progress"
                  >
                    <template v-slot:default="{ dialog }">
                      <v-progress-circular
                        :value="100"
                        color="success"
                        indeterminate
                      ></v-progress-circular>
                    </template>
                    <template v-slot:actions>
                      <v-container>
                        <v-container class="d-flex">
                          <p>Status</p>
                          <p>Nom</p>
                          <p>Nombre</p>
                          <p>Date</p>
                          <p>Actions</p>
                        </v-container>
                      </v-container>
                      <v-btn height="60px" color="success" class="mx-4"
                        >sauvegarder<v-icon icon="mdi-check" end></v-icon
                      ></v-btn>
                      <v-btn height="60px" color="red" class="mx-4"
                        >supprimer<v-icon icon="mdi-cancel" end></v-icon
                      ></v-btn>
                      <v-btn
                        height="60px"
                        color="primary"
                        class="mx-4"
                        @click="dialog = false"
                        >retour<v-icon icon="mdi-arrow-right" end></v-icon
                      ></v-btn>
                    </template>
                  </v-card>
                </v-dialog>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-container class="d-flex justify-center">
        <v-btn height="60px" color="success" class="mx-4"
          >sauvegarder<v-icon icon="mdi-check" end></v-icon
        ></v-btn>
        <v-btn height="60px" color="red" class="mx-4"
          >supprimer<v-icon icon="mdi-cancel" end></v-icon
        ></v-btn>
      </v-container>
    </v-container>
    <v-container v-if="evenements" fluid class="mt-16 bg-blue-darken-1 pt-10">
      <v-container
        fluid
        class="d-flex justify-center text-center flex-column mb-10 text-h5"
        ><h1>Gestion des Evénements</h1>
      </v-container>
      <v-row>
        <v-col v-for="n in 3" :key="n" class="d-flex justify-center">
          <v-card class="text-center rounded-lg" width="80%" max-height="90%">
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
            <v-container class="d-flex flex-column">
              <v-card-text>Capacité initiale :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="number"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>places restantes :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="number"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>Intervenant :</v-card-text>
              <input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="varchar"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>horaire :</v-card-text
              ><input
                class="bg-grey-darken-3 rounded text-center py-2"
                type="hours"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text> date :</v-card-text
              ><input
                class="bg-grey-darken-3 rounded text-center pr-2 py-2"
                type="date"
              />
            </v-container>
            <v-container class="d-flex flex-column">
              <v-card-text>Lieu :</v-card-text
              ><input class="bg-grey-darken-3 rounded text-center py-2" />
            </v-container>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="primary" to="/forfait"> Détails</v-btn>
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
const evenements = ref(false);
const dialog = ref(false);
</script>
