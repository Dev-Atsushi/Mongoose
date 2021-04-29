const mongoose = require("mongoose");

mongoose.connect("mongodb.com", { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(err) return console.log("Error connecting to Mongoose DataBase\n" + err);
});
