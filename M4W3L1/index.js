const bcrypt = require("bcrypt");

const saltRounds = 10;

// find user with that email in DB
const user = {
  email: "sam@sam.com",
  password_hash: bcrypt.hashSync("password12354", saltRounds),
};

if (!user) {
  // respond with error
}

// is the password correct
const canLogIn = bcrypt.compareSync("pasword123456", user.password_hash);

if (!canLogIn) {
  // respond to server, password is incorrect
}
