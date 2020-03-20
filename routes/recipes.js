const express = require("express");
const app = express();
const Recipe = require("../models/recipe");

app.get("/recipes", (req,res)=> {
    Recipe.find()
        .then((recipeData)=> {
            res.render("recipes", {recipes:recipeData});
        })
        .catch((err)=> {
            res.render("error", err);
        })
})




module.exports = app;