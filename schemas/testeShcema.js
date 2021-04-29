const mongoose = require("mongoose")

const teste = mongoose.Schema({
  User: { type: String, required: true, default: "User" },
  Age: { type: Number, default: "None" },
  Email: { type: String, default: "None" }
})

const teste1 = mongoose.model("Test", test)
exports.teste = test
