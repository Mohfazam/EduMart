const { Router } = require("express");
const { usermiddleware } = require("../middleware/user");
const { purchasemodel, coursemodel } = require("../db");
const courserouter = Router();


courserouter.post("/purchase", usermiddleware, async function(req, res){

    const userid = req.userid;
    const courseid = req.body.courseid;

    await purchasemodel.create({
        userid: userid,
        courseid: courseid
    })

    res.json({
        msg: "purchase Completed"
    });
});


courserouter.get("/preview", async function(req, res){

    const courses = await coursemodel.find({});


    res.json({
        courses: courses
    });
});


module.exports = {
    courserouter: courserouter
}
