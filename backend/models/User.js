const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

//Création d'un shéma pour la BDD avec les champs email et password
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
