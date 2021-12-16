const mongodb = require("mongodb");

const { MongoClient } = mongodb;

MongoClient.connect("mongodb://localhost:27017", (error, client) => {
  if (error) {
    throw new Error(error);
  }

  console.log("connected to server!");

  const db = client.db("shoe-shop");

  console.log("connected to db!");

  const cursor = db.collection("shoes").find({});

  cursor.forEach((document) => {
    console.log(document);
  });
});

const addShoe = () => {
  return db
    .collection("shoes")
    .insertOne({
      color: ["blue", "black"],
      style: "trainer",
      brand: "nike",
      price: 100,
    })
    .then((document) => {
      console.log("new shoe created");
      console.log(document);
    });
};
