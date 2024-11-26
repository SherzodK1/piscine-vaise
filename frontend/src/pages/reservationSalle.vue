<template>
  <div>
    <main>
      <section class="texte-section">
        <h2>
          Vous souhaitez réserver une salle, n'hésitez pas a remplir ce
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
