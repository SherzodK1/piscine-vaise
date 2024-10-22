const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// CRUD Utilisateur
app.post('/utilisateur', async (req, res) => {
    const utilisateur = await prisma.utilisateur.create({
        data: req.body,
    });
    res.json(utilisateur);
});

// CRUD Réservation
app.post('/reservation', async (req, res) => {
    const reservation = await prisma.reservation.create({
        data: req.body,
    });
    res.json(reservation);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
