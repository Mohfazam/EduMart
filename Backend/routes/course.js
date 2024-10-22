const { Router } = require("express");
const courserouter = Router();


courserouter.post("/purchase", function(req, res){
    res.json({
        msg: "purchase endpoint"
    });
});


courserouter.get("/preview", function(req, res){
    res.json({
        msg: "preview endpoint"
    });
});


module.exports = {
    courserouter: courserouter
}
