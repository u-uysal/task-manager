const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//to allow all the routes except get request
app.use((req, res, next) => {
  console.log(req.method, req.path); // method :get path :user etc
  if (req.method === "GET") {
    res.send("Get requests are disabled");
  } else {
    next(); // if everthings is ok , run the router
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
  next(); // to run route handler
});
