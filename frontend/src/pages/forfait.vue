<template>
  <div class="bg-white pb-16">
    <!-- Section Hero -->
    <v-img
      src="https://picsum.photos/400/400?random=3"
      max-height="300px"
      cover
      class="d-flex justify-start align-center mb-14"
    ></v-img>

    <!-- Liste des forfaits -->
    <v-container
      fluid
      class="d-flex justify-center flex-column my-4 bg-blue-darken-4 py-12 mb-16"
    >
      <v-col no-gutters>
        <v-row class="d-flex justify-center">
          <v-container
            v-for="(forfait, index) in forfaits"
            :key="index"
            class="text-center rounded-lg bg-white mb-8"
            max-width="60%"
          >
            <h2 class="text-h5">{{ forfait.type }}</h2>
            <p>{{ forfait.description }}</p>

            <!-- Liste des catégories pour chaque forfait -->
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>Choisissez une option</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div
                    v-for="(category, idx) in forfait.categories"
                    :key="idx"
                    class="d-flex justify-space-between align-center"
                  >
                    <p>{{ category.title.toUpperCase() }}</p>
                    <div class="d-flex align-center">
                      <p class="px-4">{{ category.prix }} €</p>
                      <input
                        type="radio"
                        :name="`category-${forfait.type}`"
                        :value="category.title"
                        v-model="selectedCategory[forfait.type]"
                      />
                    </div>
                  </div>

                  <!-- Bouton pour redirection -->
                  <div v-if="selectedCategory[forfait.type]" class="d-flex justify-center mt-4">
                    <v-btn
                      color="primary"
                      @click="redirectToStripe(forfait.type, selectedCategory[forfait.type])"
                    >
                      Souscrire
                    </v-btn>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-container>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Données des forfaits
const forfaits = [
  {
    type: "Forfait Aquatique",
    description: "Profitez de nos activités aquatiques !",
    categories: [
      { title: "Adulte", prix: "20" },
      { title: "Famille", prix: "50" },
      { title: "Jeunesse", prix: "15" },
      { title: "Sénior", prix: "18" },
      { title: "Famille Nombreuse", prix: "45" },
    ],
  },
  {
    type: "Forfait Salle",
    description: "Découvrez nos séances de fitness !",
    categories: [
      { title: "Adulte", prix: "30" },
      { title: "Famille", prix: "70" },
      { title: "Jeunesse", prix: "20" },
      { title: "Sénior", prix: "25" },
      { title: "Famille Nombreuse", prix: "60" },
    ],
  },
  {
    type: "Forfait Annuel",
    description: "Un accès illimité toute l'année !",
    categories: [
      { title: "Individuel", prix: "200" },
      { title: "Famille", prix: "500" },
      { title: "Jeunesse", prix: "150" },
      { title: "Sénior", prix: "180" },
    ],
  },
];

// État réactif
const selectedCategory = ref({}); // Stocke la catégorie sélectionnée pour chaque forfait

// Méthodes
const redirectToStripe = (forfaitType, category) => {
  const stripeUrls = {
    "Forfait Aquatique": {
      Adulte: "https://stripe.com/checkout/aquatique-adulte",
      Famille: "https://stripe.com/checkout/aquatique-famille",
      Jeunesse: "https://stripe.com/checkout/aquatique-jeunesse",
      Sénior: "https://stripe.com/checkout/aquatique-senior",
      "Famille Nombreuse": "https://stripe.com/checkout/aquatique-famille-nombreuse",
    },
    "Forfait Salle": {
      Adulte: "https://stripe.com/checkout/salle-adulte",
      Famille: "https://stripe.com/checkout/salle-famille",
      Jeunesse: "https://stripe.com/checkout/salle-jeunesse",
      Sénior: "https://stripe.com/checkout/salle-senior",
      "Famille Nombreuse": "https://stripe.com/checkout/salle-famille-nombreuse",
    },
    "Forfait Annuel": {
      Individuel: "https://stripe.com/checkout/annuel-individuel",
      Famille: "https://stripe.com/checkout/annuel-famille",
      Jeunesse: "https://stripe.com/checkout/annuel-jeunesse",
      Sénior: "https://stripe.com/checkout/annuel-senior",
    },
  };

  // Redirection vers l'URL associée
  const url = stripeUrls[forfaitType][category];
  if (url) {
    window.location.href = url;
  } else {
    alert("URL Stripe introuvable pour ce forfait.");
  }
};
</script>

<style>
.bg-white {
  background-color: white;
}
.bg-blue-darken-4 {
  background-color: #003366;
}
</style>
