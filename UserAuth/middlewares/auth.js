const jwt = require("jsonwebtoken");
const secretKey = "your_secret_key";

module.exports = function (req, res, next) {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(403).send("Access denied.");

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(403).send("Invalid token.");
  }
};
