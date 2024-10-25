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
      <section class="equipe-section">
        <h1>équipements</h1>
        <div v-for="equipe in equipe" :key="equipe.id" class="equipement-card">
          <h2>{{ equipe.title }}</h2>
          <p>Description : {{ equipe.description }}</p>
          <p>Quantité totale : {{ equipe.quantTotal }} </p>
          <p>Quantité actuelle : {{ equipe.quantActuelle }} </p>
          <button>Informations location</button>
        </div>
      </section>
    </main>
    <footer>
      <div class="footer-content">
        <p>Contactez-nous : +33 4 72 45 78 90</p>
        <p>Adresse : 36 avenue Sidoine Apollinaire, 69009 Lyon France</p>
        <div class="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "EquipementsPage",
  data() {
    return {
      equipe: [
        {
          id: 1,
          title: "Planche 1m",
          description:
            "Planche en mousse de 1m de long et 0,5m de large",
          quantTotal: 30,
          quantActuelle: 8,
        },
        {
          id: 2,
          title: "Lunettes de bain",
          description:
            "Lunettes de bain pour enfants de 8 a 10 ans",
          quantTotal: 54,
          quantActuelle: 54,
        },
        {
          id: 3,
          title: "Boué de nage",
          description:
            "Boué de nage pour enfants ainsi que les personnes qui apprennent la nage",
          quantTotal: 54,
          quantActuelle: 54,
        },
      ],
    };
  },
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

.equipement-section {
  text-align: center;
  margin: 20px 0;
}

.equipement-card {
  background-color: #1A75BB;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  color : #efffff
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

footer {
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
