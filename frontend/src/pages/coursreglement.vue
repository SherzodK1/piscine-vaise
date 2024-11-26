<template>
    <div>
      <h1>Règlement des Cours</h1>
      <p>Voici les détails concernant le règlement des cours...</p>
      <!-- Le bouton appelle la méthode handlePayment lors du clic -->
      <v-btn color="success" @click="handlePayment">Payer 50,00 €</v-btn>
    </div>
  </template>
  
  <script>
  export default {
    name: "CoursReglement", // Nom du composant
    methods: {
      // La méthode qui se déclenche lors du clic sur le bouton
      handlePayment() {
        // Redirection vers la page de paiement Stripe
        window.location.href = "https://buy.stripe.com/test_14kdRa9ef6ZUeoocMM";
      }
    },
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques à cette page */
  
  h1 {
    text-align: center;
    margin-top: 20px;
  }
  
  p {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .v-btn {
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 18px;
  }
  </style>
  