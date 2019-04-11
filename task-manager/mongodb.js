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

  //db.collection("users")
  //  .findOne({ _id: ObjectID("5caea18b694f60616cbf3c04") })
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err));

  //db.collection("users")
  //  .find({ age: 22 })
  //  .toArray()
  //  .then(res => console.log(res));

  db.collection("tasks").find;

  db.collection("tasks")
    .find({ completed: true })
    .toArray((err, res) => {
      if (err) throw err;

      console.log(res);
    });
});
