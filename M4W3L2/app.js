const express = require("express");
const {
  generateHashedPassword,
  validatePassword,
  createToken,
  validateToken,
} = require("./authentication");
const { saveUser, findUserByEmail } = require("./db");
const validation = require("./validation");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/signup", (req, res) => {
  if (!validation.validateUser(req.body)) {
    return res.send("user not valid");
  }

  const hashedPassword = generateHashedPassword(req.body.password);

  saveUser({ email: req.body.email, password: hashedPassword });
  res.send("user created");
});

app.post("/login", (req, res) => {
  const user = findUserByEmail(req.body.email);

  if (!user) {
    return res.send("that email is wrong");
  }

  const hashedPassword = user.password;
  const password = req.body.password;

  const canLogIn = validatePassword(password, hashedPassword);

  if (!canLogIn) return res.send("that password is wrong");

  const token = createToken(req.body.email);

  res.send({ token });
});

app.post("/authenticate", (req, res) => {
  try {
    const payload = validateToken(req.headers.authentication);
    const user = findUserByEmail(payload.email);
    if (!user) {
      return res.send("that token is good but user doesn't exist");
    }
  } catch (e) {
    return res.send("that token is not good");
  }

  res.send("authed");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
