const express = require("express");
require("./db/mongoose");

const User = require("./modals/user");

const app = express();

const port = 3000 || process.env.PORT;

app.use(express.json());
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
