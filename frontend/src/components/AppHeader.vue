<template>
<v-app-bar app color="#24292D">
    <v-img height="60" src="@/assets/logoAtlantis.svg" />
    <v-spacer></v-spacer>
    <v-btn to="/forfait">Forfait</v-btn>
    <v-btn to="/equipements">Equipements</v-btn>
    <v-btn to="/cours">Cours</v-btn>
    <v-btn to="/evenements">Evénements</v-btn>
    <v-btn to="/reservationSalle">Réservation</v-btn>
    <div class="mx-16">
    <AppLogin/>
  </div>
  </v-app-bar>
</template>