const { Router } = require("express");
const userrouter = Router();

userrouter.post("/signup", function(req, res){
    res.json({
        msg: "signup endpoint"
    });
});

userrouter.post("/signin", function(req, res){
    res.json({
        msg: "signin endpoint"
    });
});


userrouter.get("/purchases", function(req, res){
    res.json({
        msg: "purchases endpoint"
    });
});

module.exports = {
    userrouter: userrouter
}