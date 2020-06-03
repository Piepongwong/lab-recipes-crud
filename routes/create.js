const express = require("express");
const app = express();
const Recipe = require("../models/recipe");


app.get("/recipes/create", (req,res)=> {
    res.render("recipes/create");
});

app.post("/recipes/create", (req,res)=> {
    Recipe.create({
    title: req.body.title,
    level: req.body.level,
    ingredients: [req.body.ingredients],
    cuisine: req.body.cuisine,
    dishType: req.body.dishType,
    image: req.body.image,
    duration: req.body.duration,
    creator: req.body.creator,
    })
    .then(res.redirect("/recipes"))
    .catch(err => console.log(err));
});

module.exports = app;