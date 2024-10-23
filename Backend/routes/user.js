const { Router } = require("express");
const { usermodel } = require("../db");

const userrouter = Router();

userrouter.post("/signup", async function (req, res) {
  const { email, password, firstname, lastname } = req.body;

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

userrouter.post("/signin", function (req, res) {
  res.json({
    msg: "signin endpoint",
  });
});

userrouter.get("/purchases", function (req, res) {
  res.json({
    msg: "purchases endpoint",
  });
});

module.exports = {
  userrouter: userrouter,
};
