const express = require("express");

const app = express();
const dotenv = require("dotenv");
const offreRoutes = require("./routes/offre");

dotenv.config();

app.use("/api/offre", offreRoutes);

app.get("/api/offre", (req, res, next) => {
  const offre = [
    {
      _id: "oeihfzeoi",
      title: "Titre de l'offre",
      description: "description de l'offre",
    },
  ];
  res.status(200).json(offre);
});

module.exports = app;
