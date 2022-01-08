const mongodb = require("mongodb");
const express = require("express");
const app = express();
app.use(express.text());
const port = 3000;

const { MongoClient, ObjectId } = mongodb;

const dbUrl = "mongodb://localhost:27017";

const doctorsCollectionName = "doctors";
const patientsCollectionName = "patients";

MongoClient.connect(dbUrl, (error, client) => {
  if (error) {
    throw new Error(error);
  }

  console.log("connected to server!");

  const db = client.db("shoe-shop");

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/doctors", async (req, res) => {
    const doctors = await getAllDoctors(db);

    if (!doctors) {
      res.send("no doctors found");
    } else {
      res.send(doctors);
    }
  });

  app.post("/doctors", async (req, res) => {
    console.log(req.body);
    const doctorCreation = await addDoctor(db, { name: req.body });

    const doctor = getDoctor(db, doctorCreation.instertedId);

    res.send("doc created! " + JSON.stringify(doctor));
  });

  app.get("/patients", async (req, res) => {
    const patients = await getAllPatients(db);

    if (!patients) {
      res.send("no patients found");
    } else {
      res.send(patients);
    }
  });

  app.post("/patients", async (req, res) => {
    console.log(req.body);

    const doctor = await getDoctor(db, "61bb8a2dedd5d6b112675c45");

    console.log(doctor);

    const patientCreation = await addPatient(db, { name: req.body }, doctor);

    const patient = getPatient(db, patientCreation.instertedId);

    res.send(patient);
  });

  app.get("/doctors/:id/patients", async (req, res) => {
    const doctorId = req.params.id;

    const patients = await getSomePatients(db, {
      "doctor._id": { $eq: ObjectId(doctorId) },
    });

    res.send(
      patients.filter(
        (p) => p.doctor && p.doctor._id && p.doctor._id.toString() === doctorId
      )
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const getAllDoctors = (db) => {
  const cursor = db.collection(doctorsCollectionName).find({});

  return cursor.toArray();
};

const getDoctor = (db, id) => {
  const document = db.collection(doctorsCollectionName).findOne(ObjectId(id));

  return document;
};

const getAllPatients = (db) => {
  const cursor = db.collection(patientsCollectionName).find({});

  return cursor.toArray();
};

const getSomePatients = (db, query) => {
  const cursor = db.collection(patientsCollectionName).find(query);

  return cursor.toArray();
};

const getPatient = (db, id) => {
  const document = db.collection(patientsCollectionName).findOne({ id });

  return document;
};

const addDoctor = (db, doctor) => {
  return db.collection(doctorsCollectionName).insertOne({
    ...doctor,
  });
};

const addPatient = (db, patient, doctor) => {
  return db.collection(patientsCollectionName).insertOne({
    ...patient,
    doctor,
  });
};
