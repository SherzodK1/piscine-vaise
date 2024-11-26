
<template class="bg-white">
  <AppHeader/>
  <div class="bg-white pb-16">
  
    <!-- Section Hero -->
    <v-img
      src="https://picsum.photos/400/400?random=3"
      max-height="600px"
      cover
      class="d-flex justify-start align-center mb-14"
    >
      <v-container
        class="bg-grey-darken-4 text-center d-flex flex-column align-center justify-start rounded-pill opacity-80"
      >
        <h1 class="text-h3 white--text">ATLANTIS</h1>
        <p class="white--text ma-2">
          Le nouveau centre sportif Dans Lyon Vaise, venez découvrir nos
          activités
        </p>
        <v-btn color="primary" dark>En savoir plus</v-btn>
      </v-container>
    </v-img>
    <!-- Section Cours -->
    <v-container
      fluid
      class="d-flex justify-center flex-column my-4 bg-blue-darken-4 py-12 mb-16"
    >
      <v-container class="text-center text-h4 bg-blue-darken-4 pb-14">
        <h2>Des cours pour tous les goûts et tous les âges</h2>
      </v-container>
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" class="d-flex justify-center">
          <v-card
            class="text-center rounded-lg d-flex align-end"
            width="80%"
            height="100%"
            light
          >
            <v-img
              src="https://picsum.photos/400/400?random"
              cover
              class="d-flex align-end"
            >
              <v-container
                class="bg-grey-darken-4 text-center d-flex align-end justify-center opacity-90"
              >
                <v-btn color="primary" width="80%">En savoir plus</v-btn>
              </v-container>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="d-flex justify-center my-4 bg-blue-darken-1 py-16"
    >
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card class="text-center rounded-lg" light>
            <v-img
              src="https://picsum.photos/400/400?random=1"
              max-height="400px"
              cover
            ></v-img>
            <v-card-title class="text-h5">FORFAIT</v-card-title>
            <v-card-text>
              Découvrez nos séances de fitness et de renforcement musculaire
              adaptées à tous les niveaux.
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="primary" to="/forfait"> En savoir plus </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AppFooter/>
  </div>
</template>

<script>


export default {};
</script>
