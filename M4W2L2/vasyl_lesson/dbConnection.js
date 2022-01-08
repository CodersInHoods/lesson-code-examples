const { MongoClient } = require("mongodb");

const connectionURL =
  "mongodb+srv://codersinhoods:qwerty12345@cluster0.f7z0d.mongodb.net/my_db?retryWrites=true&w=majority";
const client = new MongoClient(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: client.connect(function (err, db) {
    if (err || !db) {
      return console.log(err);
    }

    dbConnection = db.db("my_db");
    console.log("Successfully connected to MongoDB.");

    return dbConnection;
  }),
  getDB: () => {
    return dbConnection;
  },
};
