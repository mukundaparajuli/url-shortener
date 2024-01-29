const express = require("express");
const dotenv=require("dotenv").config();
const app = express();
const connectToDatabase=require("./config/dbConnection")

connectToDatabase();
app.use("/", require("./routers/urlRoute"));

app.listen(5000);