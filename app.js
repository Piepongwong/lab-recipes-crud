const express = require("express");
const app = express()
app.set('view engine', 'hbs');
const mongoose = require('mongoose');
//app.set("PORT", 3002)
var hbs = require('hbs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))




mongoose.connect('mongodb://localhost/recipe-app-dev', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((db) => {
        console.log("connected to db")
    })
    .catch((error) => {
        console.log("error db", error)
    })

hbs.registerPartials(__dirname + '/views/partials');

app.use("/", require("./routes/index"));
app.use("/", require("./routes/recipes"));
app.use("/", require("./routes/recipedetail"));
app.use("/", require("./routes/delete"));
app.use("/", require("./routes/createRecipe"));

    // app.use("/", require("./routes/update"))




app.listen(3002, () => {
    console.log("running on port 3002")
})








// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
// const recipeSchema = new Schema({
//     title: ObjectId,
//     level: String,
//     cuisine: String,
//     dishType: String,
//     image: String
// });
// const recipeModel = mongoose.model("recipes", recipeSchema);