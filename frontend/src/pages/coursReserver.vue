<template>
  <div>
    <AppHeader/>
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
    <AppFooter/>
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
