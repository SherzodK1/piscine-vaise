<!-- Header.vue -->
<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/forfait">Forfait</router-link></li>
          <li><router-link to="/equipements">Equipements</router-link></li>
          <li><router-link to="/cours">Cours</router-link></li>
          <li><router-link to="/evenements">Evénements</router-link></li>
          <li><router-link to="/reservation">Réservation</router-link></li>
          <li><router-link to="/reservationSalle">Réservation Salle</router-link></li>
        </ul>
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    display: flex;
    list-style: none;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  button {
    margin-left: 10px;
  }
  </style>
  