const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "pk_live_51QPKD0CzBaSjt6jGMbPqeVRntGWiPcPPc13FPCVheDtZWUmapEb3SnAsArh6rqZJ08slvv517uZzbhyd4FdoVM4n00HBlBtw0V"
); // Remplacez par votre clé Stripe
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors"); // Ajout pour éviter les erreurs CORS
const app = express();
const prisma = new PrismaClient();

const port = 3000;
const nodemailer = require('nodemailer');
require('dotenv').config();


// Middleware
app.use(cors()); // Autoriser les requêtes cross-origin
app.use(express.json()); // Analyser le JSON
app.use(bodyParser.json());



// Clé secrète pour les JWT
const JWT_SECRET = process.env.JWT_SECRET || "votre_secret"; // Remplacez par une valeur sécurisée


// Middleware pour vérifier les JWT
function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.utilisateur = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};


//----------- INSCRIPTION -------- //
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

    // --------- CONNEXION --------- //

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
      console.log(error);
        res.status(500).json({ error: 'Il y a eu un erreur pendant la connexion' });
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
  };
  
//------------- PROFIL ---------------- //

  // Route protégée (exemple)
  app.get('/profil', authenticateToken, async (req, res) => {
    try {
      const utilisateur = await prisma.utilisateur.findUnique({ where: { Id_Utilisateur: req.utilisateur.utilisateurId },
      });
      if (!utilisateur) {
        return res.status(404).json({ error: 'Utilisateur pas trouvé' });
      }



      // Transformar datos para el frontend
    const profilData = {
      nom: utilisateur.nom,
      email: utilisateur.adresseMail,
      numeroTelephone: utilisateur.numeroTelephone,
      abonnement: utilisateur.Client?.Forfait?.nom || 'Aucun',
      activitesFavorites: utilisateur.Client?.S_inscrire.map((inscription) => inscription.Cours.nom) || [],
      
    };

      res.json(profilData);
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error);
      res.status(500).json({ error: 'Error serveur' });
    }
  });

// Route pour actualiser le profile utilisateur
app.put('/profil', authenticateToken, async (req, res) => {
  const { email, numeroTelephone, motDePasse } = req.body;

  try {
    // Encontrar al usuario autenticado
    const utilisateur = await prisma.utilisateur.findUnique({
      where: { Id_Utilisateur: req.utilisateur.utilisateurId },
    });

    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur pas trouvé' });
    }

    // Preparar los datos de actualización
    const updateData = {};
    if (email) updateData.adresseMail = email;
    if (numeroTelephone) updateData.numeroTelephone = numeroTelephone;
    if (motDePasse) updateData.motDePasse = await bcrypt.hash(motDePasse, 10);
        

    // Actualizar el perfil
    const utilisateurUpdated = await prisma.utilisateur.update({
      where: { Id_Utilisateur: req.utilisateur.utilisateurId },
      data: updateData,
    });

    res.json({ message: 'Profil mis à jour avec succès', utilisateur: utilisateurUpdated });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});




//-----------------------------------


// CRUD Utilisateur
app.post("/utilisateur", async (req, res) => {
  try {
    const utilisateur = await prisma.utilisateur.create({ data: req.body });
    res.json(utilisateur);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de l'utilisateur" });
  }
});

// CRUD Réservation
app.post("/reservation", async (req, res) => {
  try {
    const reservation = await prisma.reservation.create({ data: req.body });
    res.json(reservation);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la réservation" });
  }
});


// -------- ROUTE PAIEMENT -------- // 
// Route pour créer un PaymentIntent avec Stripe
app.post('/create-payment-intent', async (req, res) => {
    try {
        const { amount } = req.body; // Montant en centimes (par exemple 5000 pour 50€)


    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      payment_method_types: ["card"],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Erreur lors de la création du paiement" });
  }
});

// Stripe - Traitement du paiement
app.post("/charge", async (req, res) => {
  const { paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 5000,
      currency: "eur",
      payment_method: paymentMethodId,
      confirm: true,
    });

    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error.message });
  }
});


// Route pour récupérer tous les equipements
app.get("/equipement", async (req, res) => {
  try {
    const equipements = await prisma.equipement.findMany();
    res.json(equipements);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des equipements." });
  }
})
// ---------- CONTACT ----------- //

// Route pour enregistrer le contact et envoyer un email
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  try {
    // Sauvegarder le message dans la base de données
    const newContact = await prisma.contact.create({
      data: {
        nom: name,
        mail: email,
        message: message,
        createDate: new Date(),
      },
    });
    
    /* // Envoyer une notification par email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'atlantis.vaise@gmail.com',
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Message enregistré et email envoyé.' });*/
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la soumission du message.' });
  }
});
 


// Route pour récupérer tous les évenements
app.get("/evenement", async (req, res) => {
  try {
    const evenements = await prisma.evenement.findMany();
    res.json(evenements);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des evenements." });
  }
});

// Route pour récupérer tous les cours
app.get("/cours", async (req, res) => {
  try {
    const cours = await prisma.cours.findMany();
    res.json(cours);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des cours." });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Backend en écoute sur http://localhost:${port}`);
});

