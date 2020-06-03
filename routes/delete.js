const express = require("express");
const app = express();
const Recipe = require("../models/recipe");

app.get("/recipe/delete/:id", (req,res)=> {
    Recipe.findByIdAndDelete(req.params.id)
    .then(res.redirect("/recipes"))
    .catch(err => console.log(err));
});

module.exports = app;