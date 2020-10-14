const mongoose = require("mongoose")

mongoose.connect("mongodb.com", { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  
if(err) return console.log("Erro ao conectar a DataBase Moongoose\n" + err) // Se der erro retornar no console
})
