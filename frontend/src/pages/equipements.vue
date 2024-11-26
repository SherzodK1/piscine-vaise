<<template>
  <div>
     <AppHeader/>
    <v-main>
      <!-- Section Hero -->
           <h1 class="text-h3 white--text">Nos Équipements</h1>
          <p class="white--text ma-2">
            Explorez notre large gamme d'équipements pour vos activités sportives.
          </p>
          <v-btn color="primary" dark large>Découvrir plus</v-btn>


      <!-- Section Équipements -->
      <v-container fluid class="my-8 bg-blue-darken-4 py-12">
        <h2 class="text-center white--text mb-8 text-h4">
          Équipements disponibles
        </h2>
        <v-row>
          <v-col
            v-for="equipe in equipe"
            :key="equipe.id"
            cols="12"
            sm="6"
            md="4"
            class="d-flex justify-center mb-6">
            <v-card class="text-center rounded-lg" outlined>
              <v-img
                :src="`https://picsum.photos/400/400?random=${equipe.id}`"
                height="200"
                cover
              ></v-img>
              <v-card-title class="text-h5">{{ equipe.title }}</v-card-title>
              <v-card-text>
                <p>Description : {{ equipe.description }}</p>
                <p>Quantité totale : {{ equipe.quantTotal }}</p>
                <p>Quantité actuelle : {{ equipe.quantActuelle }}</p>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn color="primary">Informations location</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Section Footer -->
    <AppFooter/>
  </div>
</template>

<script>
<<<<<<< HEAD
import Header from "header.vue";
=======

import Header from "/workspaces/piscine-vaise/header.vue";
>>>>>>> main


export default {
  name: "EquipementsPage",
  components: {
    Header,
  },
  data() {
    return {
      equipe: [
        {
          id: 1,
          title: "Planche 1m",
          description: "Planche en mousse de 1m de long et 0,5m de large",
          quantTotal: 30,
          quantActuelle: 8,
        },
        {
          id: 2,
          title: "Lunettes de bain",
          description: "Lunettes de bain pour enfants de 8 à 10 ans",
          quantTotal: 54,
          quantActuelle: 54,
        },
        {
          id: 3,
          title: "Bouée de nage",
          description:
            "Bouée de nage pour enfants ainsi que les personnes qui apprennent la nage",
          quantTotal: 54,
          quantActuelle: 54,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
