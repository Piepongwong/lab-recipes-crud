const express = require("express");
const app = express();
const Recipe = require("../models/recipe");
const mongoose = require("mongoose")

app.get("/recipes", (req,res)=> {
    mongoose.connect("mongodb://localhost/recipeApp")
    .then(() => Recipe.find({}))
        .then((recipes)=> {
            res.render("recipes/list", {recipes});
        })
        .catch((err)=> {
            res.render("error", err);
        });
});

module.exports = app;