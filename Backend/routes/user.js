const { Router } = require("express");
const { usermodel } = require("../db");

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

userrouter.post("/signin", function (req, res) {
    const { email, password } = req.body;

    const user = usermodel.findOne({
        email: email,
        password: password
    });

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
