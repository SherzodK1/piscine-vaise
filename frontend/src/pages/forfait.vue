<template>
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
      class="d-flex justify-center flex-column my-4 bg-blue-darken-4 py-12 mb-16"
    >
      <v-col no-gutters>
        <v-row class="d-flex justify-center">
          <v-container
            v-for="(forfait, index) in forfaits"
            :key="index"
            class="text-center rounded-lg bg-white mb-8"
            max-width="60%"
            height="100%"
          >
            <h2 class="text-h5">{{ forfait.type }}</h2>
            <p>{{ forfait.descritpiton }}</p>

            <!-- Liste des panneaux pour chaque forfait -->
            <v-expansion-panels class="bg-white">
              <v-expansion-panel class="mb-6 bg-white">
                <v-expansion-panel-title class="bg-white">
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <!-- Liste des catégories du forfait -->
                  <div
                    v-for="(category, index) in forfait.categories"
                    :key="index"
                    class="d-flex justify-space-between"
                  >
                    <p>{{ category.title.toUpperCase() }}</p>
                    <div class="d-flex justify-space-between">
                      <p class="px-4">{{ category.prix }} €</p>
                      <input
                        type="radio"
                        :name="`category-${forfait.type}`"
                        :value="category.title"
                        v-model="selectedCategory"
                      />
                    </div>
                  </div>

                  <!-- Bouton pour s'abonner -->
                  <div
                    v-if="selectedCategory"
                    class="d-flex justify-center mt-4"
                  >
                    <v-btn color="primary" @click="subscribe(forfait.type)"
                      >Je m'abonne</v-btn
                    >
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-container>
        </v-row>
      </v-col>
    </v-container>
    <v-container
      fluid
      class="d-flex justify-center my-4 bg-blue-darken-2 py-12"
      width="100%"
    >
      <v-container
        class="text-center rounded-lg bg-white mb-8"
        max-width="60%"
        height="100%"
      >
        <h2 class="text-h5">Prix à l'unitée</h2>
        <p>
          (L'achat de billet a l'unitée n'est pas disponible sur le site mais
          seulement a l'accueil de la piscine)
        </p>
        <div class="d-flex justify-space-between">
          <p>ADULTES</p>
          <p>3.44 €</p>
        </div>
        <div class="d-flex justify-space-between">
          <p>JEUNESSE (16 à 25 ans)</p>
          <p>2.88 €</p>
        </div>
        <div class="d-flex justify-space-between">
          <p>ENFANT (15 ans et moins)</p>
          <p>1.45 €</p>
        </div>
        <div class="d-flex justify-space-between">
          <p>AÎNÉ (65 ans et plus)</p>
          <p>3.00€</p>
        </div>
        <div class="d-flex justify-space-between">
          <p>FAMILLE (1 adulte + 1 enfant)</p>
          <p>5.00€</p>
        </div>
        <div class="d-flex justify-space-between">
          <p>FAMILLE (2 adultes + 1 enfant)</p>
          <p>7.50€</p>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script setup class>
import { ref } from "vue";

// Données des forfaits
const forfaits = [
  {
    type: "Forfait Aquatique",
    descritpiton: "Venez faire glouglouglouglouglouglouglouglouglouglou",

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
    descritpiton: "Découvrez nos séance de fitness",
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
    descritpiton: "le basic big mac",
    categories: [
      { title: "Individuel", prix: "200" },
      { title: "Famille", prix: "500" },
      { title: "Jeunesse", prix: "150" },
      { title: "Sénior", prix: "180" },
    ],
  },
];

// État réactif
const selectedCategory = ref(""); // Catégorie sélectionnée

// Méthodes
const subscribe = (forfaitType) => {
  alert(
    `Vous vous êtes abonné au tarif ${selectedCategory.value} pour le ${forfaitType}`
  );
};
</script>
