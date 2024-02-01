const express = require("express");
const offerRoutes = require("./routes/offer");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.tpbqupg.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());
// on utilise express.json pour transformer le corps de la requête en objet JS utilisable. Il est possible d'utiliser bodyparser mais il est inclus dans express depuis la version 4.16.0

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // * = tout le monde peut accéder à l'API
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  // on donne l'autorisation d'utiliser certains headers
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  // on donne l'autorisation d'utiliser certaines méthodes
  next();
});

//app.use("/api/offer", offerRoutes);
//app.use("/api/auth", userRoutes);

app.get("/api/offer", (req, res, next) => {
  const offer = [
    {
      _id: "oeihfzeoi",
      title: "Titre de l'offre",
      description: "Les infos de mon offre",
    },
  ];
  res.status(200).json(offer);
});

module.exports = app;
