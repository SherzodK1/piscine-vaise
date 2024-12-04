const express = require('express');
const { PrismaClient } = require('@prisma/client');
const stripe = require('stripe')('pk_live_51QPKD0CzBaSjt6jGMbPqeVRntGWiPcPPc13FPCVheDtZWUmapEb3SnAsArh6rqZJ08slvv517uZzbhyd4FdoVM4n00HBlBtw0V'); // Remplacez par votre clé Stripe
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Ajout pour éviter les erreurs CORS
const equipementsRoute = require('./routes/equipements');

const app = express();
const prisma = new PrismaClient();
const port = 3000;

// Middleware
app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Analyser le JSON

// Clé secrète pour les JWT
const JWT_SECRET = process.env.JWT_SECRET || 'votre_secret'; // Remplacez par une valeur sécurisée

// Routes des équipements
app.use('/api/equipements', equipementsRoute);

// Inscription
app.post('/register', async (req, res) => {
    const { nom, email, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email déjà utilisée' });
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const utilisateur = await prisma.utilisateur.create({
            data: { nom, email, password: hashedPassword },
        });

        res.status(201).json({ message: 'Utilisateur créé avec succès', utilisateur });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// Connexion
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Vérifier si l'utilisateur existe
        const utilisateur = await prisma.utilisateur.findUnique({ where: { email } });
        if (!utilisateur) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        // Vérifier le mot de passe
        const isPasswordValid = await bcrypt.compare(password, utilisateur.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        // Générer un token JWT
        const token = jwt.sign({ utilisateurId: utilisateur.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Connexion réussie', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur lors de la connexion' });
    }
});

// Middleware pour vérifier les JWT
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
app.get('/profile', authenticateToken, async (req, res) => {
    try {
        const utilisateur = await prisma.utilisateur.findUnique({ where: { id: req.utilisateur.utilisateurId } });
        if (!utilisateur) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        res.json(utilisateur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// CRUD Utilisateur
app.post('/utilisateur', async (req, res) => {
    try {
        const utilisateur = await prisma.utilisateur.create({ data: req.body });
        res.json(utilisateur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
});

// CRUD Réservation
app.post('/reservation', async (req, res) => {
    try {
        const reservation = await prisma.reservation.create({ data: req.body });
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création de la réservation' });
    }
});

// Stripe - Créer un PaymentIntent
app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'eur',
            payment_method_types: ['card'],
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Erreur lors de la création du paiement' });
    }
});

// Stripe - Traitement du paiement
app.post('/charge', async (req, res) => {
    const { paymentMethodId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 5000,
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
app.listen(port, () => {
    console.log(`Backend démarré sur http://localhost:${port}`);
});
