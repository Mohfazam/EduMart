const { Router } = require("express");
const { adminmodel } = require("../db");


const adminrouter = Router();


adminrouter.post("/signup", async function(req, res){
    const { email, password, firstname, lastname } = req.body;
  //TODO: adding zod validation
  //TODO: password hashing
  //TODO: adding try catch block for the usermodel
  

  await adminmodel.create({
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
  });

  res.json({
    msg: "signup succeded",
  });
});

adminrouter.post("/signin", function(req, res){
    res.json({
        msg: "admin signin endpoint"
    });
});

adminrouter.post("/course", function(req, res){
    res.json({
        msg: "admin create course Endpoint"
    });
});

adminrouter.put("/course", function(req, res){
    res.json({
        msg: "admin update course Endpoint"
    });
});

adminrouter.get("/course/bulk", function(req, res){
    res.json({
        msg: "admin bulk course Endpoint"
    });
});


module.exports = {
    adminrouter: adminrouter
}