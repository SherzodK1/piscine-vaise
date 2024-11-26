<template>
    <div class="pa-4 text-center">
        <v-btn-group color="#24292D" density="comfortable" rounded="lg" divided>
            <v-btn variant="flat" >
                <div class="text-none font-weight-regular">
                    S'INSCRIRE
                </div>

                <v-dialog activator="parent" max-width="500" class="rounded-xl">
                    <template v-slot:default="{ isActive }">
                        <v-card rounded="xl" color="#1A75BB">
                            <div class="d-flex justify-end">
                                <v-btn icon="mdi-close" size="x-large" variant="text"
                                    @click="isActive.value = false"></v-btn>
                            </div>
                            <v-card-title class="d-flex justify-space-between align-start">
                                <v-img height="100" src="@/assets/logoAtlantis.svg" />

                            </v-card-title>


                            <v-card-text class="text-center">
                                <div class="text-white font-weight-bold text-h5">
                                    Bienvenue
                                </div>
                                <div class="text-white mb-4">
                                    Créez votre compte
                                </div>

                                <v-form v-model="formValid" @submit.prevent="registerUtilisateur">
                                    <v-text-field v-model="password" :readonly="loading" :rules="[required]"
                                        class="text-white" bg-color="white" label="Nom et prenom"
                                        placeholder="Entrez votre nom et prenom" clearable></v-text-field>
                                    <v-text-field v-model="email" :readonly="loading" :rules="[required, emailRule]"
                                        class="text-black" bg-color="white" label="Email" clearable></v-text-field>
                                    <v-text-field v-model="password" :readonly="loading" :rules="[required, passwordRule]"
                                        class="text-white" bg-color="white" label="Mot de passe"
                                        placeholder="Entrez votre mot de passe" clearable></v-text-field>
                                    <v-btn size="large" class="text-h6 font-weight-bold mb-6" text="S'inscrire"
                                        type="submit" color="#2D3648" variant="elevated" @click="isActive.value = false"
                                        block></v-btn>
                                </v-form>
                                <v-container class="d-flex justify-center align-center">
                                    <v-row class="align-center justify-center">
                                        <v-col cols="4">
                                            <v-divider></v-divider>
                                        </v-col>
                                        <v-col cols="4" class="text-center font-weight-bold">
                                            <span>Continuer avec</span>
                                        </v-col>
                                        <v-col cols="4">
                                            <v-divider></v-divider>
                                        </v-col>
                                    </v-row>
                                    </v-container>
                                    <div class="d-flex justify-center align-center">
                                        <v-btn class="ma-2" color="#2D3648" icon="mdi-google"
                                            variant="text"></v-btn>

                                        <v-btn class="ma-2" color="#2D3648" icon="mdi-facebook" 
                                            variant="text"></v-btn>

                                        <v-btn class="ma-2" color="#2D3648" icon="mdi-instagram"
                                            variant="text"></v-btn>
                                    </div>
                              
                               
                                <div class="text-medium-emphasis mb-1 text-body-2">
                                    En cliquant sur se connecter, vous acceptez nos conditions d’utilisation et notre
                                    politique de confidentialité
                                </div>


                            </v-card-text>

                            <v-divider class="mt-2"></v-divider>

                        </v-card>
                    </template>
                </v-dialog>
            </v-btn>
        </v-btn-group>
    </div>
</template>

<script>
export default {
    data: () => ({
        formValid: false,
        nom: '',
        email: '',
        password: '',
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
        passwordRule(value) {
            return value.length >= 6 || 'Le mot de passe doit contenir au moins 6 caractères';
        },
        async registerUtilisateir() {
            // Désactiver le formulaire et afficher le chargement
            this.loading = true;

            try {
                // Envoyer les données au backend
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nom: this.nom,
                        email: this.email,
                        password: this.password,
                    }),
                });

                const result = await response.json();

                if (response.ok) {
                    // Succès
                    alert('Inscription réussie ! Bienvenue, ' + this.nom);
                    this.resetForm();
                } else {
                    // Afficher les erreurs
                    alert(result.error || 'Une erreur est survenue');
                }
            } catch (error) {
                alert("Erreur lors de l'inscription : " + error.message);
            } finally {
                // Réactiver le formulaire
                this.loading = false;
            }
        },
        resetForm() {
            this.nom = '';
            this.email = '';
            this.password = '';
            this.formValid = false;
        },
    },
};
</script>
