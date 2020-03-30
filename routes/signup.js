const express = require("express");
const app = express();
const User = require("../models/user"); // user model

// // BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

// Render sign up form

app.get("/signup", (req, res) => {
  res.render("user/signup");
});

// Create user

app.post("/signup", (req, res,next) => {
  //   const username = req.body.username;
  //   const password = req.body.password;

  const { username, password } = req.body; // shortcut expr
  // set up to encrypt pass
  const salt     = bcrypt.genSaltSync(bcryptSalt);
  const hashedPass = bcrypt.hashSync(password, salt);

  if (username === "" || password === "") {
    res.render("user/signup", {
      errorMessage:
        "Invalid username or password. Please indicate a username and a password (min. 3 characters)"
    });
    return;
  }

  //checking for existing user names
  User.findOne({ username: username })
    .then(user => {
      if (user !== null) {
        res.render("user/signup", {
          errorMessage: "Username already in use."
        });
        return;
      }
      //create user
      User.create({ username, password: hashedPass })
        .then(user => {
          res.redirect("/recipes"); //redirects to the list.hbs
        })
        .catch(err => {
          res.send("user not created", err);
        });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = app;
