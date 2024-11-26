<template>
    <div>
      <Header />
      <main>
        <section class="reservations-section">
          <h1>HISTORIQUE DES RÉSERVATIONS</h1>
          <div v-for="reservation in reservations" :key="reservation.id" class="reservation-card">
            <img :src="reservation.image" alt="Image de l'activité" class="reservation-image" />
            <div class="reservation-details">
              <h2>{{ reservation.title }}</h2>
              <p>{{ reservation.description }}</p>
              <p>Horaire : {{ reservation.time }}</p>
              <p>Date : {{ reservation.date }}</p>
              <p>Lieu : {{ reservation.location }}</p>
              <p>Intervenant : {{ reservation.speaker }}</p>
              <p>Type : {{ reservation.type }}</p>
            </div>
          </div>
          <div class="actions">
            <v-btn color="primary" class="mx-2" :to="{ name: 'reservation' }">Réserver un autre cours</v-btn>
            <v-btn color="error" class="mx-2">Annuler une réservation</v-btn>
          </div>
        </section>
      </main>
      <footer>
        <div class="footer-content">
          <p>Copyright 2024 Spider Web Tech</p>
          <p>Contactez-nous : +33 4 72 45 78 90</p>
          <p>Adresse : 36 avenue Sidoine Apollinaire, 69009 Lyon France</p>
          <div class="social-media">
            <a href="https://www.facebook.com/villedelyon">Facebook</a>
            <a href="https://twitter.com/villedelyon">Twitter</a>
            <a href="https://www.instagram.com/villedelyon/">Instagram</a>
            <a href="https://fr.linkedin.com/company/ville-de-lyon">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import Header from '/workspaces/piscine-vaise/header.vue';

  
  export default {
    name: 'ReservationsHistory',
    components: {
      Header,
    },
    data() {
      return {
        reservations: [
          {
            id: 1,
            title: 'Plongeon',
            description: "Cours d’apprentissage des différentes méthodes de plongeon",
            time: '13h00 / 14h00',
            date: '20/10/2024',
            location: 'Piscine B',
            speaker: 'Patrick Grosjean',
            type: 'cours',
            image: 'https://via.placeholder.com/150', // Remplace par l'URL de l'image
          },
          {
            id: 2,
            title: 'Aquagym Party',
            description:
              "Découvrez le plein potentiel de piscine grâce à cet événement qui mêle musculation et nage",
            time: '13h30 / 16h00',
            date: '14/10/2024',
            location: 'Piscine B',
            speaker: '',
            type: 'événement',
            image: 'https://via.placeholder.com/150', // Remplace par l'URL de l'image
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .reservations-section {
    text-align: center;
    margin: 20px 0;
  }
  
  .reservation-card {
    display: flex;
    align-items: center;
    background-color: #0073e6;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    color: #fff;
  }
  
  .reservation-image {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .reservation-details {
    text-align: left;
  }
  
  .actions {
    margin-top: 20px;
  }
  
  footer {
    background-color: #24292d;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .social-media a {
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
  }
  </style>
  