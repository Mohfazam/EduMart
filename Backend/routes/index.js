const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use("/user", userrouter);
app.use("/course", courserouter);


app.listen(3000);