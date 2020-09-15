const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient; //initialize connection

const connectionUrl = "mongodb://127.0.0.1:27017"; //localhost ip and db code.

const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database!"); //we use return that because stop execution
    }

    const db = client.db(databaseName); // for database manipulation

    db.collection("users")
      .find({ name: "Ufuk" })
      .toArray((error, user) => {
        // get data from db
        if (error) {
          return console.log("unable to fetch");
        }

        console.log(user);
      });
  }
);
