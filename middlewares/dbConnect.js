const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Sikeres csatlakozás"))
    .catch((error) => console.log("Valami hiba történt" + error.message));

  mongoose.connection.on("open", () => console.log("Adatbázis megnyitva!"));
  mongoose.connection.on("close", () => console.log("Adatbázis bezárva!"));
};

module.exports = dbConnect;
