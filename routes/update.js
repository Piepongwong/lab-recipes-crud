const express = require("express");
const app = express()
const Recipe = require("../models/recipe")


app.get("/recipe-files/:id", (req, res) => {
    Recipe
        .findById(req.params.id)
        .then(recipeData => {
            console.log(recipeData)
            res.render("recipeDetails", { recipe: recipeData })
        })
        .catch((error) => {
            console.log("error error error", error)
        })
})

module.exports = app;