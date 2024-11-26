<template>
  <div>
    <AppHeader/>
    <main>
      <section class="cours-section">
        <h1>équipements</h1>
        <div v-for="cours in cours" :key="cours.id" class="cours-card">
          <h2>{{ cours.title }}</h2>
          <p>Description : {{ cours.description }}</p>
          <p>Capacité : {{ cours.capacite }}</p>
          <p>Places Restantes : {{ cours.placesRestantes }}</p>
          <p>Intervenant : {{ cours.intervenant }}</p>
          <p>Horaire : {{ cours.Horaire }}</p>
          <p>date : {{ cours.date }}</p>
          <p>lieu : {{ cours.lieu }}</p>
          <button>Informations location</button>
        </div>
      </section>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
export default {
  name: "CoursPage",
  data() {
    return {
      cours: [
        {
          id: 1,
          title: "Initiation au surf",
          description: "Cours d'initiation au surf, ouvert a tous",
          capacite: 30,
          placesRestantes: 8,
          intervenant: "Patrick Grosjean",
          Horaire: "13h00 à 14h00",
          date: "20/10/2024",
          lieu: "Piscine B",
        },
        {
          id: 2,
          title: "Plongeon",
          description:
            "Cours d'apprentissages des différentes méthodes de plongeon",
          capacite: 16,
          placesRestantes: 8,
          intervenant: "Robert Asgard",
          Horaire: "8h30 à 10h00",
          date: "14/10/2024",
          lieu: "Piscine A",
        },
        {
          id: 3,
          title: "Waterpollo",
          description: "Cours d'entrapinelent pour l'équipe U11",
          capacite: 30,
          placesRestantes: 17,
          intervenant: "Patrick Grosjean",
          Horaire: "18h30 à 20h00",
          date: "13/10/2024",
          lieu: "Piscine C",
        },
        {
          id: 4,
          title: "Cours en salle",
          description: "Cours en salle avec un coach sportif",
          capacite: 30,
          placesRestantes: 28,
          intervenant: "Patrick Grosjean",
          Horaire: "13h00 à 14h00",
          date: 19 / 10 / 2024,
          lieu: "salle 301",
        },
        {
          id: 5,
          title: "Musculation",
          description:
            "Cours de musculation avec machines de courses et d'haltérophilie",
          capacite: 14,
          placesRestantes: 3,
          intervenant: "David Fernandes",
          Horaire: "13h00 à 14h00",
          date: "24/10/2024",
          lieu: "salle 302",
        },
        {
          id: 6,
          title: "Yoga",
          description:
            "Boué de nage pour enfants ainsi que les personnes qui apprennent la nage",
          capacite: 30,
          placesRestantes: 8,
          intervenant: 7,
          Horaire: "13:00 14:00",
          date: "23/10/2024",
          lieu: "Piscine C",
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

.cours-section {
  text-align: center;
  margin: 20px 0;
}

.cours-card {
  background-color: #1a75bb;
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
