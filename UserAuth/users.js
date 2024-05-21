const bcrypt = require("bcryptjs");

let users = [
  {
    id: 1,
    email: "user@example.com",
    password: bcrypt.hashSync("password123", 8), // hashed password
  },
];

module.exports = {
  findUserByEmail: (email) => users.find((user) => user.email === email),
};
