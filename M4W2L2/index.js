const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./dbConnection");
const app = express();

app.use(bodyParser.json());

app.get("/doctors", (req, res) => {
  const db = dbConnect.getDB();

  db.collection("doctors")
    .find({})
    .limit(10)
    .toArray((err, result) => {
      if (err) {
        return res.status(400).send("Error fetching listings!");
      }

      return res.json(result);
    });
});

app.get("/doctors/:doctorsId/patients", (req, res) => {
  const { doctorsId } = req.params;
  const db = dbConnect.getDB();

  db.collection("patients")
    .find({ doctorsId: doctorsId })
    .toArray((err, result) => {
      if (err) {
        return res.status(400).send("Error fetching listings!");
      }

      return res.json(result);
    });
});

app.post("/doctors", (req, res) => {
  const patient = req.body;
  const db = dbConnect.getDB();

  db.collection("doctors").insertOne(patient);
  res.status(200).json(patient);
});

app.get("/patients", (req, res) => {
  const db = dbConnect.getDB();

  db.collection("patients")
    .find({})
    .limit(10)
    .toArray((err, result) => {
      if (err) {
        return res.status(400).send("Error fetching listings!");
      }

      return res.json(result);
    });
});

app.post("/patients", (req, res) => {
  const patient = req.body;
  const db = dbConnect.getDB();

  db.collection("patients").insertOne(patient);
  res.status(200).json(patient);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
