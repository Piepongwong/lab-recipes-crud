const mongoose = require("mongoose");

const Recipe = mongoose.model("recipes", {
    title: String,
    level: String,
    ingredients: [Array],
    cuisine: String,
    dishType: String,
    image: String,
    duration: Number,
    creator: String,
    created: { type: Date, default: Date.now }  
});

module.exports = Recipe;