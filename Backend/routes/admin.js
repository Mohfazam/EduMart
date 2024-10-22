const { Router } = require("express");
const { adminmodel } = require("../db");


const adminrouter = Router();


adminrouter.post("/signup", function(req, res){
    res.json({
        msg: "admin signup endpoint"
    });
});

adminrouter.post("/signin", function(req, res){
    res.json({
        msg: "admin signin endpoint"
    });
});

adminrouter.post("/", function(req, res){
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