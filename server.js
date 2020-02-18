const path = require('path');
const createError = require('http-errors');
const mongoose = require("mongoose");
const express = require("express");
const getTitle = require("../functions/getTitle");
const router = express.Router();
const { Article } = require("../models/article");
//routes
const home = require("./routes/home");
const forum = require("./routes/forum");
const submit = require("./routes/submit");
const articles = require("./routes/articles");

console.log(result.parsed);

mongoose.connect(
         `mongodb+srv://greg:${process.env.PASS}@cluster0-8vzth.mongodb.net/test?retryWrites=true&w=majority`,
         { useUnifiedTopology: true, useNewUrlParser: true };)
        .then(() => console.log("you are connected to bizbazdevoe"))
        .catch(err => console.log("Error - Not Connected - Error", err));

app.use(express.json());
app.use("/", home);
app.use("/api/articles", articles);
app.use("/forum", forum);
app.use("/submit", submit);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
