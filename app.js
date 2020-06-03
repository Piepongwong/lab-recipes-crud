const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");

app.set("views", __dirname + "views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));
app.use("/", require("./routes/recipes"));
app.use("/", require("./routes/recipe"));
app.use("/", require("./routes/create"));
app.use("/", require("./routes/edit"));
app.use("/", require("./routes/delete"));

app.listen(3000, ()=> {
    console.log("Webserver is listening");
});

