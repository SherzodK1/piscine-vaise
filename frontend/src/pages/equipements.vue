<template>
  <div>
    <AppHeader/>
    <main>
      <section class="equipement-section">
        <h1>Équipements</h1>
        <div v-for="equipe in equipe" :key="equipe.id" class="equipement-card">
          <h2>{{ equipe.title }}</h2>
          <p>Description : {{ equipe.description }}</p>
          <p>Quantité totale : {{ equipe.quantTotal }}</p>
          <p>Quantité actuelle : {{ equipe.quantActuelle }}</p>
          <button>Informations location</button>
        </div>
      </section>
    </main>
    <AppFooter/>
  </div>
</template>

<script>


export default {
  name: "EquipementsPage",
  components: {
    
  },
  data() {
    return {
      equipe: [
        { id: 1, title: "Planche 1m", description: "Planche en mousse de 1m de long et 0,5m de large", quantTotal: 30, quantActuelle: 8 },
        { id: 2, title: "Lunettes de bain", description: "Lunettes de bain pour enfants de 8 à 10 ans", quantTotal: 54, quantActuelle: 54 },
        { id: 3, title: "Bouée de nage", description: "Bouée de nage pour enfants ainsi que les personnes qui apprennent la nage", quantTotal: 54, quantActuelle: 54 }
      ]
    };
  }
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
  color: #efffff;
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
