<template>
  <div>
    <AppHeader/>
    <main>
      <section class="evenement-section">
        <h1>EVENEMENTS</h1>
        <div v-for="event in events" :key="event.id" class="evenement-card">
          <h2>{{ event.title }}</h2>
          <p>Description : {{ event.description }}</p>
          <p>Capacité : {{ event.capacity }} personnes</p>
          <p>Places restantes : {{ event.remainingSeats }} personnes</p>
          <p>Horaire : {{ event.time }}</p>
          <p>Date : {{ event.date }}</p>
          <p>Lieu : {{ event.location }}</p>
          <button>Réserver</button>
        </div>
      </section>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
export default {
  name: "EventsPage",
  data() {
    return {
      events: [
        {
          id: 1,
          title: "ATLANTIS !!!",
          description:
            "Le nouveau centre sportif de Lyon va bientôt ouvrir ses portes !",
          capacity: 30,
          remainingSeats: 8,
          time: "13h00 / 14h00",
          date: "20/10/2024",
          location: "Centre sportif",
        },
        {
          id: 2,
          title: "Aquagym Party",
          description:
            "Découvrez le plein potentiel de piscine grâce à cet événement qui mêle musculation et nage",
          capacity: 16,
          remainingSeats: 8,
          time: "13h30 / 16h00",
          date: "14/10/2024",
          location: "Piscine A",
        },
        {
          id: 3,
          title: "Triathlon Indoor",
          description: "Vivez une expérience sportive intense et ludique",
          capacity: 30,
          remainingSeats: 17,
          time: "8h00 / 17h00",
          date: "13/10/2024",
          location: "Piscine C et salle 303",
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

.evenement-section {
  text-align: center;
  margin: 20px 0;
}

.evenement-card {
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
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
