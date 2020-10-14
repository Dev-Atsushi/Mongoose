const mongoose = require("mongoose")

const teste = mongoose.Schema({
  User: { type: String, required: true, default: "User" },
  Idade: { type: Number, default: "Nenhum" },
  E-mail: { type: String, default: "Nenhum" }
})

const teste1 = mongoose.model("Teste", teste)
exports.teste = teste1
