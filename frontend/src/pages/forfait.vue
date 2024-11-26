<template class="bg-white">
  <AppHeader/>
  <div class="bg-white pb-16">
    <!-- Section Hero -->
    <v-img
      src="https://picsum.photos/400/400?random=3"
      max-height="300px"
      cover
      class="d-flex justify-start align-center mb-14"
    ></v-img>
    <v-container
      fluid
      class="d-flex justify-center flex-row my-4 bg-blue-darken-4 py-12 mb-16"
    >
      <v-col no-gutters>
        <v-row v-for="n in 3" :key="n" class="d-flex justify-center">
          <v-container
            class="text-center rounded-lg rounded-lg bg-white mb-8"
            max-width="60%"
            height="100%"
            light
          >
            <h2 class="text-h5">FORFAIT</h2>
            <p>
              Découvrez nos séances de fitness et de renforcement musculaire
              adaptées à tous les niveaux.
            </p>
            <v-container fluid class="bg-white" elevation-0 width="100%">
              <v-expansion-panels class="bg-white">
                <v-expansion-panel class="bg-white" title="prix">
                  <template v-slot:text>
                    <div class="d-flex justify-space-between">
                      <p>ADULTES</p>
                      <p>344 €</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <p>JEUNESSE (16 à 25 ans)</p>
                      <p>288 €</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <p>ENFANT (15 ans et moins)</p>
                      <p>145 €</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <p>AÎNÉ (65 ans et plus)</p>
                      <p>300 €</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <p>FAMILLE (1 adulte + 1 enfant)</p>
                      <p>500 €</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <p>FAMILLE (2 adultes + 1 enfant)</p>
                      <p>750 €</p>
                    </div>
                    <div class="d-flex justify-center mt-4">
                      <v-btn color="primary">Je m'abonne</v-btn>
                    </div>
                  </template>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-container>
          </v-container>
        </v-row>
      </v-col>
    </v-container>
    <v-container
      fluid
      class="d-flex justify-center flex-row my-4 bg-blue-darken-2 py-12"
    >
      <v-container
        class="text-center rounded-lg rounded-lg bg-white mb-8"
        max-width="60%"
        height="100%"
        light
      >
        <h2 class="text-h5">Tarifs à l’unitée</h2>
        <p>
          Découvrez nos séances de fitness et de renforcement musculaire
          adaptées à tous les niveaux.
        </p>
        <v-container fluid class="bg-white" elevation-0 width="100%">
          <div class="d-flex justify-space-between">
            <p>ADULTES</p>
            <p>344 €</p>
          </div>
          <div class="d-flex justify-space-between">
            <p>JEUNESSE (16 à 25 ans)</p>
            <p>288 €</p>
          </div>
          <div class="d-flex justify-space-between">
            <p>ENFANT (15 ans et moins)</p>
            <p>145 €</p>
          </div>
          <div class="d-flex justify-space-between">
            <p>AÎNÉ (65 ans et plus)</p>
            <p>300 €</p>
          </div>
          <div class="d-flex justify-space-between">
            <p>FAMILLE (1 adulte + 1 enfant)</p>
            <p>500 €</p>
          </div>
          <div class="d-flex justify-space-between">
            <p>FAMILLE (2 adultes + 1 enfant)</p>
            <p>750 €</p>
          </div>
          <div class="d-flex justify-center mt-4">
            <v-btn color="primary">Je m'abonne</v-btn>
          </div>
        </v-container>
      </v-container>
    </v-container>
    <AppFooter/>
  </div>
</template>
