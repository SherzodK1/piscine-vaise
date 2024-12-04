const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware pour gérer les requêtes CORS
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Exemple de données d'équipements
const equipements = [
  {
    id_Equipement: 1,
    nom: "Tapis de yoga",
    type: "Accessoire",
    quantite: 10,
    duree: "1h",
    image: "https://example.com/images/tapis-yoga.jpg"
  },
  {
    id_Equipement: 2,
    nom: "Haltères",
    type: "Accessoire",
    quantite: 15,
    duree: "30min",
    image: "https://example.com/images/halteres.jpg"
  },
  {
    id_Equipement: 3,
    nom: "Vélo stationnaire",
    type: "Machine",
    quantite: 5,
    duree: "1h",
    image: "https://example.com/images/velo.jpg"
  },
  // Ajoute d'autres équipements ici...
];

// Route pour récupérer les équipements
app.get('/api/equipements', (req, res) => {
  res.json(equipements); // Retourne la liste des équipements
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
