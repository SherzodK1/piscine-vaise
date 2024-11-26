<template>
  <v-footer class="d-flex flex-column" app color="#24292D">
    <v-container >
      <v-row>
        <v-col >
          <v-container  fluid class="d-flex justify-start align-center">
            <v-img height="60" src="@/assets/logoAtlantis.svg"/> 
          </v-container>                 
        </v-col>

        <v-col  class="d-flex justify-end align-center">
          <div>
            <h5 class="mb-3 text-h5 font-wheight-bold">SUIVEZ-NOUS</h5>
            <div class="d-flex">
              <a href="https://www.linkedin.com" target="_blank" class="mr-4">
                <v-icon color="#00B4E7">mdi-linkedin</v-icon>
              </a>
              <a href="https://www.facebook.com" target="_blank" class="mr-4">
                <v-icon color="#00B4E7">mdi-facebook</v-icon>
              </a>
              <a href="https://www.youtube.com" target="_blank" class="mr-4">
                <v-icon color="#00B4E7">mdi-youtube</v-icon>
              </a>
              <a href="https://www.instagram.com" target="_blank" class="mr-4">
                <v-icon color="#00B4E7">mdi-instagram</v-icon>
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <v-icon color="#00B4E7">mdi-twitter</v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col >
          <div class="d-flex flex-row justify-center gc-10 ">
          <p >Copyright 2024 Spider Web Tech.</p>
            <p >Tél: <a href="tel:+33472531181" style="color:#EFEFEF">+33 4 72 53 11 81</a></p>
            <div class="d-flex gc-10 ">
              <a href="/contact" style="color:#EFEFEF">Contactez-nous</a> 
              <a href="/apropos" style="color:#EFEFEF">À propos du Centre sportif</a> 
              <a href="/credit"  style="color:#EFEFEF">Politique de confidentialité</a>
            </div>
            <p style="color:#EFEFEF">50 avenue Sidoine Apollinaire, 69009 Lyon France</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
    </v-footer>
  </template>

  <script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>