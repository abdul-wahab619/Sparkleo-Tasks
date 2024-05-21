const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail } = require("../users");
const router = express.Router();
const secretKey = "your_secret_key";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = findUserByEmail(email);

  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });
  res.send({ token });
});

module.exports = router;
