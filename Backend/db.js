const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://mohfazam:wPlvY91k1HgmrD13@cluster0.f8f0e.mongodb.net/EduMart")


const schema = mongoose.Schema;
const objectid = mongoose.ObjectId;

const userschema = schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
});

const adminschema = schema({
    email: {type: String, unique: true},
    password: String,
    firstname: String,
    lastname: String
});

const courseschema = schema({
    title : String,
    description: String,
    price: Number,
    imageurl: String,
    creatorid: objectid
});

const purchaseschema = schema({
    userid: objectid,
    courseid: objectid
});

const usermodel = mongoose.model("user", userschema);
const adminmodel = mongoose.model("user", adminschema);
const coursemodel = mongoose.model("user", courseschema);
const purchasemodel = mongoose.model("user", purchaseschema);


module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}