const express = require("express");
const offerRoutes = require("./routes/offer");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const dotenv = require("dotenv");

const app = express();
dotenv.config();

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
