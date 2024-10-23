const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");



function usermiddleware(req, res, next){
    consttoken =  req.headers.token;

    const decoded = jwt.verify(token, JWT_USER_PASSWORD);
}

module.exports = {
    usermiddleware: usermiddleware
}