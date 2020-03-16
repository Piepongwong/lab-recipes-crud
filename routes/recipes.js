const express = require("express");
const app = express();
const Recipe = require("../models/recipe");

app.get("/", (req, res) => {
  Recipe
    .find()
    .then((recipes) => {
      res.render("recipes/list", {
        recipesHbsName: recipes
      });
    })
    .catch((err) => {
      res.render("error", err);
    })
})

app.get("/detail/:recipeId", (req, res) => {
  Recipe
    .findById(req.params.recipeId)
    .then((recipeData) => {
      res.render("recipe", {
        recipeHbs: recipeData
      });
    })
    .catch((err) => {
      res.send("error");
    })
})

app.get("/delete/:id", (req, res) => {
  Recipe
    .findByIdAndDelete(req.params.id)
    .then((recipeData) => {
      res.redirect("/recipes")
    })
    .catch((err) => {
      res.send("Err", err)
    })
})

app.get("/update/:id", (req, res) => {
  Recipe
    .findById(req.params.id)
    .then((recipeData) => {
      res.render("update", {
        recipeHbs: recipeData
      });
    })
    .catch((err) => {
      res.send("error")
    })
})

app.post("/update/:id", (req, res) => {
  Recipe
    .findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      level: req.body.level,
      cuisine: req.body.cuisine,
    })
    .then((recipeHbs) => {
      res.redirect(`/recipes/detail/${recipeHbs._id}`);
    })
    .catch((error) => {
      console.log("error", error);
    })
})

app.get("/create", (req, res) => {
  res.render("recipes/create.hbs");
});

app.post("/create", (req, res) => {
  console.log(req.body);
  Recipe
    .create({
      title: req.body.title,
      cuisine: req.body.cuisine,
      creator: req.body.creator,
      duration: req.body.duration
    })
    .then((recipe) => {
      res.redirect(`/recipes`);
    })
    .catch((err) => {
      console.log("Error:", err)
    })
})


module.exports = app