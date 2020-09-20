const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    // req.header = portmanda yazilan. Tokendeki
    //Bearer+space ifadesini kaldirmamiz gerekiyor ki gercek tokena
    //ulasalim.Bearer ifadesi token cesidini belli ediyor
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, "randomtext"); //to check token is valid and hasnt expired
    // decoded = { _id: '5f65062e6d6bdc1ad7b22ecf', iat: 1600512667 }

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    }); //find the user who has that authentication token still stored

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user; // to send correct user as a respond
    next(); // dont forget to run router when you use middleware
  } catch (error) {
    res.status(401).send({ error: "please authenticate" });
  }
};

module.exports = auth;
