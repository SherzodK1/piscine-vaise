const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

app.use(express.json());

// Clé secrète pour signer les JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Inscription
app.post('/register', async (req, res) => {
    const { nom, email, password } = req.body;
  
    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Email déja utilisée' });
      }
  
      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur
      const utilisateur = await prisma.utilisateur.create({
        data: { nom, email, password: hashedPassword },
      });
  
      res.status(201).json({ message: 'Utilisateur créé avec succès', utilisateur });
    } catch (error) {
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
  
      res.status(200).json({ message: 'Connexion avec succes', token });
    } catch (error) {
      res.status(500).json({ error: 'Il y a eu un error pendant la connexion' });
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
  app.get('/profile', authenticateToken, async (req, res) => {
    try {
      const utilisateur = await prisma.utilisateur.findUnique({ where: { id: req.user.userId } });
      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur pas trouvé' });
      }
      res.json(utilisateur);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });
  

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
