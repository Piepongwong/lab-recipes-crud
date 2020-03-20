const express = require("express");
const app = express()
const Recipe = require("../models/recipe")


app.get("/delete/:id", (req,res)=> {
    Recipe
        .findByIdAndDelete(req.params.id)
        .then((recipeID)=> {
            res.redirect("/recipes")
        })
        .catch(err=> {
            console.log("Err", err)
        })
})
module.exports = app;