const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// Importer le routeur pour l'équipement
const equipementRouter = require("./routes/equipements");  // Assure-toi que le chemin est correct

// Utiliser CORS pour les requêtes cross-origin
app.use(cors());  

// Middleware pour analyser les corps des requêtes en JSON
app.use(express.json());

// Utiliser le routeur d'équipements
app.use("/api/equipements", equipementRouter);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
});
