<template>
    <v-container class="mx-auto, my-3" >
      <v-row no-gutters>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-card
            class="mx-auto"
            max-width="300"
          >
            <v-img
              height="400px"
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover>
            
              <v-card-actions class="d-flex flex-column fill-height justify-end align-center text-white">
                <v-btn
                class="opacity-20"
                >EXPLORE</v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>