const express = require('express');
const { PrismaClient } = require('@prisma/client');
const stripe = require('stripe')('pk_live_51QPKD0CzBaSjt6jGMbPqeVRntGWiPcPPc13FPCVheDtZWUmapEb3SnAsArh6rqZJ08slvv517uZzbhyd4FdoVM4n00HBlBtw0V'); // Remplacez par votre clé Stripe
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const cors = require('cors');

app.use(express.json()); // Middleware pour analyser le JSON
app.use(cors());

// Clé secrète pour signer les JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Inscription
app.post('/registrer', async (req, res) => {
    const { nom, email, password } = req.body;
  
    const adresseMail = email;
    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await prisma.utilisateur.findUnique({ where: { adresseMail } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email déja utilisée' });
      }
  
      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur
      const utilisateur = await prisma.utilisateur.create({
        data: { nom, adresseMail, motDePasse: hashedPassword },
      });
  
      res.status(201).json({ message: 'Utilisateur créé avec succès', utilisateur });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });
  
  // Connexion
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const adresseMail = email;
    try {
      // Vérifier si l'utilisateur existe
      const utilisateur = await prisma.utilisateur.findUnique({ where: { adresseMail } });
      if (!utilisateur) {
        return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
      }
  
      // Vérifier le mot de passe
      const isPasswordValid = await bcrypt.compare(password, utilisateur.motDePasse);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
      }
  
      // Générer un token JWT
      const token = jwt.sign({ utilisateurId: utilisateur.Id_Utilisateur }, JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({ message: 'Connexion avec succes', token });
    } catch (error) {
      res.status(500).json({ error: 'Erreur serveur' });
    }
  });
  
  // Middleware pour vérifier le JWT
  function authenticateToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Access denied' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.utilisateur = decoded;
      next();
    } catch (error) {
      res.status(403).json({ error: 'Invalid token' });
    }
  }
  
  // Route protégée (exemple)
  app.get('/profil', authenticateToken, async (req, res) => {
    try {
      const utilisateur = await prisma.utilisateur.findUnique({ where: { id: req.utilisateur.Id_Utilisateur } });
      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur pas trouvé' });
      }
      res.json(utilisateur);
    } catch (error) {
      res.status(500).json({ error: 'Error serveur' });
    }
  });
  

// CRUD Utilisateur
app.post('/utilisateur', async (req, res) => {
    try {
        const utilisateur = await prisma.utilisateur.create({
            data: req.body,
        });
        res.json(utilisateur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
    }
});

// CRUD Réservation
app.post('/reservation', async (req, res) => {
    try {
        const reservation = await prisma.reservation.create({
            data: req.body,
        });
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
    }
});

// Route pour créer un PaymentIntent avec Stripe
app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body; // Montant en centimes (par exemple 5000 pour 50€)

        // Créer un PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'eur',
            payment_method_types: ['card'], // Types de paiement autorisés
        });

        // Retourner le clientSecret à utiliser dans le frontend
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erreur lors de la création du paiement' });
    }
});

// Route pour traiter un paiement après confirmation du client
app.post('/charge', async (req, res) => {
    const { paymentMethodId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000, // Montant en centimes (50€)
            currency: 'eur',
            payment_method: paymentMethodId,
            confirm: true,
        });

        res.send({ success: true });
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
});

// Lancer le serveur
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
