<template>
    <div class="pa-4 text-center">
        <v-btn-group color="#00B4E7" density="comfortable" rounded="lg" divided>
            <v-btn  variant="flat">
                <div class="text-none font-weight-regular">
                    SE CONNECTER
                </div>

                <v-dialog activator="parent" max-width="500" class="rounded-xl">
                    <template v-slot:default="{ isActive }">
                        <v-card rounded="xl" color="#1A75BB" >
                             <div class="d-flex justify-end">
                            <v-btn icon="mdi-close"  size="x-large" variant="text" @click="isActive.value = false" ></v-btn> 
                             </div>
                            <v-card-title class="d-flex justify-space-between align-start">
                                <v-img height="100" src="@/assets/logoAtlantis.svg" />      
                                 
                            </v-card-title>

                        
                            <v-card-text class="text-center">
                                <div class="text-white font-weight-bold text-h5">
                                    Bienvenue
                                </div>
                                <div class="text-white mb-4">
                                    Connectez-vous ou créez un compte
                                </div>

                                <v-form v-model="form" @submit.prevent="onSubmit">
                                    <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="text-black" bg-color="white"
                                        label="Email" clearable></v-text-field>

                                    <v-text-field v-model="password" :readonly="loading" :rules="[required]" class="text-white" bg-color="white"
                                        label="Mot de passe" placeholder="Entrez votre mot de passe" clearable></v-text-field>
                                 
                                    <v-btn size="large" class="font-weight-bold text-h6" text="Se connecter" type="submit" color="#00B4E7"
                                        variant="elevated" @click="isActive.value = false" block></v-btn>
                                    <div class="mt-8">
                                        <a href="home" class="text-white "> Mot de passe oublié ?</a>
                                    </div>
                                </v-form>

                                <v-btn size="large" class="text-h6 font-weight-bold my-6" text="S'inscrire" type="submit" color="#2D3648" 
                                variant="elevated" @click="isActive.value = false" block>
                                <AppInscription/>
                            </v-btn>
                            
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
        form: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>

