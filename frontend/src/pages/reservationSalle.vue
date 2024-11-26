<template>
  <div>
    <AppHeader/>
    <main>
      <section class="Header-section">
        <img src="reservationSalle.png" alt="Reservation de salle" />
      </section>
      <section class="texte-section">
        <h2>
          Vous souhaitrez réserver une salle, n'hésitez pas a remplir ce
          formulaire
        </h2>
      </section>
      <form>
        <br><label for="fname">Nom </label><br>
        <input type="text" id="nom" name="Nom" />
        <br><label for="lname">Description</label><br>
        <input type="text" id="description" name="Description" />
        <br><label for="fname">Date</label><br>
        <input type="text" id="date" name="Date" />
        <br><label for="lname">Durée</label><br>
        <input type="text" id="duree" name="Durée" />
        <br><label for="fname">Nombre de personnes</label><br>
        <input type="text" id="nombre de personnes" name="Nombre de personnes" />
        <br><label for="lname">Salle</label><br>
        <input type="text" id="salle" name="Salle" />
        <h2>Total de ... €</h2>
      </form>
      <section class="reservation-section">
        <button>Soumettre</button>
      </section>
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
input[type="text"],
select {
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

form {
  background-color: #1475bb;
  color: #efff;
}

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

.reservation-section {
  display: flex;
  justify-content: center;
  margin: 20px 0;
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
