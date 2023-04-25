require("dotenv").config();
const express = require("express");
const app = express();
const dbConnect = require("./middlewares/dbConnect");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/rootRoutes"));

dbConnect();

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
