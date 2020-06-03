const express = require("express");
const app = express();
const Recipe = require("../models/recipe");


app.get("/recipe/edit/:id", (req,res)=> {
    Recipe.findById(req.params.id)
    .then((result)=> {
        res.render("recipes/edit", {recipe: result});
        })
        .catch((err)=> {
            res.render("error", err);
        });
});

app.post("/recipe/edit/", (req,res)=> {
    Recipe.findByIdAndUpdate(req.body._id, {
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