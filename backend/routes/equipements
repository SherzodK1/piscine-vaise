const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Route pour récupérer les équipements
router.get('/', async (req, res) => {
  try {
      const equipements = await prisma.equipement.findMany(); // Vérifie la table dans la base
      res.json(equipements); // Envoie les données sous forme JSON
  } catch (error) {
      console.error('Erreur lors de la récupération des équipements :', error);
      res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});


module.exports = router;
console.log("API des équipements chargée !");
