const { Router } = require("express");
const { usermodel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "EduMart, Hello World, USER";

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

userrouter.get("/purchases", function (req, res) {
  res.json({
    msg: "purchases endpoint",
  });
});

module.exports = {
  userrouter: userrouter,
};
