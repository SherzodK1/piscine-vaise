<template>
  <AppHeader />
  <div class="bg-white pb-16">
    <!-- Section Hero -->
    <v-img src="https://picsum.photos/400/400?random=3" max-height="800px" cover>
      <div class="mb-14 d-flex flex-column justify-center text-center py-14">
        <div>
          <h1 class="text-h3 text-center text-white">CONTACTEZ-NOUS</h1>
          <v-row>
            <v-col class="d-flex justify-center align-center">
              <div>
                <div class="d-flex my-6">
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
          <v-container class="d-flex justify-center text-center text-white flex-column">
            <p>Pour nous joindre:</p>
            <p>
              Par téléphone, au Tél : +33472531181, du lundi au vendredi, dès 8 h 00, et le samedi et dimanche, dès 9 h
              45
            </p>
            <p>
              Ou bien par e-mail, a l’adresse suivante atlantis.vaise@gmail.com
            </p>
          </v-container>
        </div>

        <v-container class="d-flex flex-column justify-center text-center rounded-lg my-8 bg-white" max-width="70%"
          height="100%">
          <v-form ref="form"  v-model="formValid" lazy-validation>
            <div class="d-flex justify-space-around mt-4">
              <v-text-field v-model="name" label="Nom Prénom" outlined :rules="[required]" max-width="70%"
                variant="outlined" class="mx-8"></v-text-field>
              <v-text-field v-model="email" label="Adresse e-mail" outlined :rules="[required, emailRule]"
                max-width="70%" variant="outlined" class="mx-8 bg-white">
              </v-text-field>
            </div>
            <div class="d-flex justify-center">
              <v-textarea v-model="message" label="Message" outlined :rules="[required]" max-width="93%"
                variant="outlined" class="bg-white"></v-textarea>
            </div>
          </v-form>
         </v-container>
        <v-container>
          <v-btn type="submit" color="primary" @click="SendMessage()" :disabled="loading">Envoyer</v-btn>
        </v-container>
        <v-alert v-if="feedback" :type="feedbackType" dismissible>
            {{ feedback }}
          </v-alert>
      </div>
    </v-img>
  </div>
  <AppFooter/>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    loading: false,
  }),

methods: {
        required(value) {
            return !!value || 'Ce champ est requis';
        },
        emailRule(value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) || "L'email n'est pas valide";
        },
        
        async SendMessage() {
            // Désactiver le formulaire et afficher le chargement
            this.loading = true;

            try {
                // Envoyer les données au backend
                const response = await axios.post('http://localhost:3000/contact', {
                        name: this.name,
                        email: this.email,
                        message: this.message,
                    });

                if (response.status === 200) {
                    // Succès
                    alert('Votre message a été envoyé avec succès.');
                    this.resetForm();
                }
            } catch (error) {
                //alert("Erreur lors de l'envoi du message." + error.message);
            } finally {
                // Réactiver le formulaire
                this.loading = false;
            }
        },
        resetForm() {
            this.nom = '';
            this.email = '';
            this.message = '';
            this.formValid = false;
        },
    },
};



</script>

