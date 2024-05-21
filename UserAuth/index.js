const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/route.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.use("/", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
