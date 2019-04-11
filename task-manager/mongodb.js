//const mongodb = require("mongodb");
//const MongoClient = mongodb.MongoClient;
//const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Error in database");
  }

  const db = client.db(databaseName);
});
