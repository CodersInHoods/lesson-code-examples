const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.send(`${Date.now()}`);
});

app.get("/patients", async (req, res) => {
  const ref = firebase.database().ref("patients");
  const patients = await ref.once("value").then((snapshot) => snapshot.val());

  res.json(patients);
});

app.post("/patients", async (req, res) => {
  const body = req.body;
  const ref = firebase.database().ref("patients");
  const patient = await ref.push().set(body);

  res.json(patient);
});

exports.app = functions.https.onRequest(app);

