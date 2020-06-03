const express = require("express");
const app = express();
const Recipe = require("../models/recipe");


app.get("/recipe/:id", (req,res)=> {
    Recipe.findById(req.params.id)
    .then((result)=> {
        res.render("recipes/recipe", {recipe: result});
        })
        .catch((err)=> {
            res.render("error", err);
        });
});

module.exports = app;