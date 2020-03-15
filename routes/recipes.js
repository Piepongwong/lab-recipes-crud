const express = require("express");
const app = express();
const Recipe = require("../models/recipe");


// List All
app.get("/", (req,res)=> {
    Recipe.find()
        .then((recipesData)=> {
            res.render("recipe/list", {recipes:recipesData});
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Show one
app.get("/detail/:id", (req,res)=> {
    Recipe
        .findById(req.params.id)
        .then((recipeData)=> {
            res.render("recipe/detail", {recipe:recipeData});
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Delete
app.get("/delete/:id", (req,res)=> {
    Recipe
        .findByIdAndDelete(req.params.id)
        .then((recipe)=> {
            console.log("deleted: ",recipe)
            res.redirect("/recipes");   
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Create one
app.get("/add-recipe", (req,res)=>{
    res.render("recipe/create")
})

app.post("/create", (req,res)=> {
    console.log(req.body);
    Recipe
        .create({
            title:req.body.title,
            level:req.body.level,
            ingredients:[],
            cuisine:req.body.cuisine,
            dishType:req.body.dishType,
            image:req.body.imageUrl,
            duration:req.body.duration,
            creator:req.body.creator
        })
        .then((recipeData)=> {
            console.log("added: ",recipeData)
            res.redirect(`/recipes/detail/${recipeData._id}`);
        })
        .catch((err)=> {
            res.send(err);
        })
})

// Uopdate
app.get("/update/:id", (req,res)=> {
    Recipe
        .findById(req.params.id)
        .then((recipeData)=> {
            res.render("recipe/update", {recipe:recipeData});
        })
        .catch((err)=> {
            res.send(err);
        })
})

app.post("/update/:id", (req,res)=> {
    Recipe
        .findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            level:req.body.level,
            ingredients:[],
            cuisine:req.body.cuisine,
            dishType:req.body.dishType,
            image:req.body.imageUrl,
            duration:req.body.duration,
            creator:req.body.creator
        })
        .then((recipeData)=> {
            res.redirect(`/recipes/detail/${recipeData._id}`);
        })
        .catch((err)=> {
            res.send(err);
        })
})

module.exports = app;