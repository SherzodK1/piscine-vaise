<template>
  <div class="bg-white pb-16">
    <!-- Section Hero -->
    <v-img
      src="https://picsum.photos/400/400?random=3"
      max-height="800px"
      cover
    >
      <div class="mb-14 d-flex flex-column justify-center text-center py-14">
        <div>
          <h1 class="text-h3 text-center text-white">CONTACTEZ-NOUS</h1>
          <v-row>
            <v-col class="d-flex justify-center align-center">
              <div>
                <div class="d-flex my-6">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    class="mr-4"
                  >
                    <v-icon color="#00B4E7">mdi-linkedin</v-icon>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    class="mr-4"
                  >
                    <v-icon color="#00B4E7">mdi-facebook</v-icon>
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    class="mr-4"
                  >
                    <v-icon color="#00B4E7">mdi-youtube</v-icon>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    class="mr-4"
                  >
                    <v-icon color="#00B4E7">mdi-instagram</v-icon>
                  </a>
                  <a href="https://www.twitter.com" target="_blank">
                    <v-icon color="#00B4E7">mdi-twitter</v-icon>
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-container
            class="d-flex justify-center text-center text-white flex-column"
          >
            <p>Pour nous joindre:</p>
            <p>
              Par téléphone, au Tél : +33472531181, du lundi au vendredi, dès 8
              h 00, et le samedi et dimanche, dès 9 h 45
            </p>
            <p>
              Ou bien par e-mail, a l’adresse suivante
              resagroupe.vaise@mairie-lyon.fr
            </p>
          </v-container>
          <v-container
            class="text-center d-flex flex-column align-center justify-start"
          >
          </v-container>
        </div>
        <v-container
          class="d-flex flex-column justify-center text-center rounded-lg my-8 bg-white"
          max-width="70%"
          height="100%"
        >
          <div class="d-flex justify-space-around mt-4">
            <v-text-field
              max-width="70%"
              variant="outlined"
              class="mx-8"
              label="Nom Prénom"
            ></v-text-field>
            <v-text-field
              max-width="70%"
              variant="outlined"
              class="mx-8 bg-white"
              label="Adresse e-mail"
            ></v-text-field>
          </div>
          <div class="d-flex justify-center">
            <v-textarea
              max-width="93%"
              variant="outlined"
              label="Nom Prénom"
              class="bg-white"
            >
            </v-textarea>
          </div>
        </v-container>
        <v-container>
          <v-btn color="primary" dark>Envoyer</v-btn>
        </v-container>
      </div>
    </v-img>
  </div>
</template>
<script setup>
const items = [
  {
    title: "Vuetify Documentation",
    icon: `$vuetify`,
    href: "https://vuetifyjs.com/",
  },
  {
    title: "Vuetify Support",
    icon: "mdi-shield-star-outline",
    href: "https://support.vuetifyjs.com/",
  },
  {
    title: "Vuetify X",
    icon: [
      "M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",
    ],
    href: "https://x.com/vuetifyjs",
  },
  {
    title: "Vuetify GitHub",
    icon: `mdi-github`,
    href: "https://github.com/vuetifyjs/vuetify",
  },
  {
    title: "Vuetify Discord",
    icon: [
      "M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z",
    ],
    href: "https://community.vuetifyjs.com/",
  },
  {
    title: "Vuetify Reddit",
    icon: `mdi-reddit`,
    href: "https://reddit.com/r/vuetifyjs",
  },
];
</script>
