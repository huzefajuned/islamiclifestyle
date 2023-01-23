const mongoose = require("mongoose");
const databse_Url = "mongodb+srv://islamiclifestyle:Huzefa910222@islamiclifestyle.loegke0.mongodb.net/?retryWrites=true&w=majority";
const DATABASE = mongoose
  .connect(databse_Url)
  .then((res) => {
    console.log("Dtabase Connected ");
  })
  .catch((err) => {
    console.log("Error to Connection To Databse" + err);
  });
module.exports = DATABASE;
