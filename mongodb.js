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

    console.log("connected");
  }
);
