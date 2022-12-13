const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home")
})

app.listen(PORT)
