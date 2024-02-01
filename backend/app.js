const express = require("express");
const offerRoutes = require("./routes/offer");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

//app.use("/api/offer", offerRoutes);

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
