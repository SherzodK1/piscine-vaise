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
      <section class="welcome-section">
        <h1>BIENVENUE JEAN-MAURICE SIMEONE</h1>
      </section>
      <section class="profile-section">
        <div class="profile-info">
          <img src="profile-picture.jpg" alt="Photo de profil" />
          <p>Nom : Jean-Maurice Simeone</p>
          <p>Adresse : All. Pierre de Coubertin, 69007 Lyon</p>
          <p>Abonnement : Premium</p>
          <p>Depuis : 10/09/2024</p>
        </div>
      </section>
      <section class="activites-section">
        <h2>Mes activités favorites :</h2>
        <ul>
          <br>1er : Musculation</br>
          <br>2ème : Yoga</br>
          <br>3ème : Surf</br>
        </ul>
      </section>
      <section class="actions-section">
        <button>Accueil</button>
        <button>Voir mes réservations</button>
        <button>Gérer mon profil/abonnement</button>
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
export default {
  name: "ProfilePage",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24292D;
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

.welcome-section {
  text-align: center;
  margin: 20px 0;
}

.profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1475BB;
  color: #fff;
  padding: 20px;
}

.profile-info {
  text-align: left;
}

.activites-section {
  text-align: center;
  background-color: #F5F9E9;
  margin: 20px 0;
}

.actions-section {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.actions-section button {
  margin: 0 10px;
}

footer {
  background-color: #24292D;
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
