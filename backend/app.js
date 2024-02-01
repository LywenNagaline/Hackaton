const express = require("express");
const offerRoutes = require("./routes/offer");
const userRoutes = require("./routes/user");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const axios = require('axios')
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


ENV_FILE_PATH='backend/.env';
dotenv.config({ path: ENV_FILE_PATH });

POLE_EMPLOI_ACCESS_TOKEN_URL = 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire';

POLE_EMPLOI_ACCESS_TOKEN_URL_DATA = {
  grant_type: 'client_credentials',
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  scope: 'api_offresdemploiv2 o2dsoffre'
};

POLE_EMPLOI_SEARCH_OFFERS_URL = 'https://api.pole-emploi.io/partenaire/offresdemploi/v2/offres/search';
//app.use("/api/offer", offerRoutes);
//app.use("/api/auth", userRoutes);

function GetPoleEmploiAPIHeaders(accessToken) {
  return {'Authorization': 'Bearer ' + accessToken};
}

async function GetAccessToken() {
  let req = await axios({
    method: 'post',
    url: POLE_EMPLOI_ACCESS_TOKEN_URL,
    data: POLE_EMPLOI_ACCESS_TOKEN_URL_DATA,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
  });

  let accessToken = req.data.access_token;
  
  return accessToken;
}

async function GetOffers(offersCount=10, firstOfferIndex=0, departement=31) {
  let accessToken = await GetAccessToken();

  let range = '0-9';
  req = await axios({
    method: 'get',
    params: {
      range: range,
      departement: departement
    },
    url: POLE_EMPLOI_SEARCH_OFFERS_URL,
    headers: GetPoleEmploiAPIHeaders(accessToken)
  });

  results = ParseOffers(req.data);
  
  return results;
}

function ParseOffers(data) {
  
  results = [];
  for (let i = 0; i < data.resultats.length; i++) {
    resultat = data.resultats[i];
    let d = {
      'title' : resultat.intitule,
      'creationDate' : resultat.dateCreation,
      'department' : resultat.lieuTravail.libelle,
      //'codepostal' : resultat.lieuTravail.codepostal,
      //'commune' : resultat.lieuTravail.commune,
      'requiredExperience' : resultat.experienceLibelle,
    };
    results.push(d);
  }
  return results;
}

app.get("/api/offer", async (req, res, next) => {
  data = await GetOffers();
  res.status(200).json(data);
});

module.exports = app;
