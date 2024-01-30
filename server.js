const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const connectToDatabase = require("./config/dbConnection")

connectToDatabase();

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.use(express.json());
app.use("/", require("./routers/urlRoute"));
app.get("/", (req, res) => {
    res.render('index')
})

app.listen(5000);