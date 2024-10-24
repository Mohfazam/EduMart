const { Router } = require("express");
const { usermodel, purchasemodel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { usermiddleware } = require("../middleware/user");


const userrouter = Router();

userrouter.post("/signup", async function (req, res) {
  const { email, password, firstname, lastname } = req.body;
  //TODO: adding zod validation
  //TODO: password hashing
  //TODO: adding try catch block for the usermodel

  await usermodel.create({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  });

  res.json({
    msg: "signup succeded",
  });
});

userrouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const user = await usermodel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );
    res.json({
      msg: "signin Successful",
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Invalid Credentials",
    });
  }
});

userrouter.get("/purchases",usermiddleware, async function (req, res) {

  const userid = req.userid;

  const purchases = await purchasemodel.find({
    userid
  });

  res.json({
    purchases: purchases
  });
});

module.exports = {
  userrouter: userrouter,
};
