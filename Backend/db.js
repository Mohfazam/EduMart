const mongoose = require("mongoose");



const schema = mongoose.Schema;
const objectid = mongoose.ObjectId;

const userschema = new schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
});

const adminschema = new schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
});

const courseschema = new schema({
    title : String,
    description: String,
    price: Number,
    imageurl: String,
    creatorid: objectid
});

const purchaseschema = new schema({
    userid: objectid,
    courseid: objectid
});

const usermodel = mongoose.model("user", userschema);
const adminmodel = mongoose.model("admin", adminschema);
const coursemodel = mongoose.model("course", courseschema);
const purchasemodel = mongoose.model("purchase", purchaseschema);


module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}