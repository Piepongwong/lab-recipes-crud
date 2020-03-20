const express = require("express");
const app = express();
const Recipe = require("../models/recipe");


app.get("/createRecipe", (req,res)=> {
    res.render("createRecipe");
})

app.post("/createRecipe", (req,res)=> {
    console.log(req.body);
    Recipe
        .create({
            title: req.body.title,
            cuisine: req.body.cuisine,
            dishType: req.body.dishType,
            creator: req.body.creator,
            duration: req.body.duration,
            level: req.body.level
            
        })
        .then((recipe)=> {
            res.redirect(`/recipedetail/${recipe._id}`);
        })
        .catch((err)=> {
            res.send("error");
        })
})

module.exports = app;