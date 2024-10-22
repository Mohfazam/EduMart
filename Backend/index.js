const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { userrouter } = require("./routes/user");
const { courserouter } = require("./routes/course");
const { adminrouter } = require("./routes/admin");

const app = express();
app.use(express.json());

app.use("/user", userrouter);
app.use("/course", courserouter);
app.use("/admin", adminrouter);



async function main() {
    await mongoose.connect("mongodb+srv://mohfazam:wPlvY91k1HgmrD13@cluster0.f8f0e.mongodb.net/EduMart")
    app.listen(3000);
}

main();