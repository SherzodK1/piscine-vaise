<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>Forfait</li>
          <li>Equipements</li>
          <li>Cours</li>
          <li>Evénements</li>
          <li>Réservation</li>
        </ul>
        <button>S'inscrire</button>
        <button>Se connecter</button>
      </nav>
    </header>
    <main>
      { id: 2, title: "Plongeon", description: "Cours d'apprentissages des
      différentes méthodes de plongeon", capacite: 16, placesRestantes: 8,
      intervenant: "Robert Asgard", Horaire: "8h30 à 10h00", date: "14/10/2024",
      lieu: "Piscine A", },

      <br />

      { id: 1, title: "ATLANTIS !!!", description: "Le nouveau centre sportif de
      Lyon va bientôt ouvrir ses portes !", capacity: 30, remainingSeats: 8,
      time: "13h00 / 14h00", date: "20/10/2024", location: "Centre sportif", },
      <br />
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
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24292d;
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
