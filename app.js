//general info
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(bodyParser.urlencoded({
  extended: false
}));

mongoose.connect('mongodb://localhost/recipe-app-dev', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((connectionInfo) => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("error", error);
  });

app.set("PORT", 3000);
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use("/recipes", require("./routes/recipes"));
//app.use("/", require("./routes/index"));
//app.set('views', path.join(__dirname, 'views'));

app.listen(app.get("PORT"), () => {
  console.log('🏃‍ on port 3000', app.get("PORT"))
});