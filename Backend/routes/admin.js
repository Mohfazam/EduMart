const { Router } = require("express");
const { adminmodel, coursemodel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminmiddleware } = require("../middleware/admin");

const adminrouter = Router();

adminrouter.post("/signup", async function (req, res) {
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

adminrouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminmodel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },JWT_ADMIN_PASSWORD);
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

adminrouter.post("/course", adminmiddleware, async function (req, res) {

    const adminid = req.userid;

    const { title, description, imageurl, price } = req.body;

    const course = await coursemodel.create({
        title: title, 
        description:  description, 
        imageurl: imageurl, 
        price: price,
        creatorid: adminid
    });

  res.json({
    msg: "Course created",
    courseid: course._id
  });
});



adminrouter.put("/course", adminmiddleware, async function (req, res) {
  const adminid = req.userid;

    const { title, description, imageurl, price, courseid } = req.body;

    const course = await coursemodel.updateOne({
      _id: courseid,
      creatorid: adminid
    } ,{
        title: title, 
        description:  description, 
        imageurl: imageurl, 
        price: price
    });

  res.json({
    msg: "Course updated",
    courseid: course._id
  });
});

adminrouter.get("/course/bulk", adminmiddleware, async function (req, res) {
  const adminid = req.userid;

  const courses = await coursemodel.find({
    creatorid: adminid
  });

res.json({
  msg: "Your Courses",
  courses
});
});

module.exports = {
  adminrouter: adminrouter,
};
