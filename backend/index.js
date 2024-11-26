const express = require('express');
const { PrismaClient } = require('@prisma/client');
const stripe = require('stripe')('pk_live_51QPKD0CzBaSjt6jGMbPqeVRntGWiPcPPc13FPCVheDtZWUmapEb3SnAsArh6rqZJ08slvv517uZzbhyd4FdoVM4n00HBlBtw0V'); // Remplacez par votre clé Stripe
const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // Middleware pour analyser le JSON

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
