// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");


/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public", "images")));
app.use(express.static(path.join(__dirname, "public", "css")));

/**
 * Routes Definitions
 */



app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });

app.get("/", (req, res) => {
    res.status(200).send("Ethan Krause Portfolio");
  });

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});


// 404 handling //
app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { title: "404 Page Not Found", url: req.url});
      return;
    }
  
    // respond with json
    if (req.accepts('json')) {
      res.json({ error: '404 Not found' });
      return;
    }
  
    // default to plain-text. send()
    res.type('txt').send('404 Not found');
  });

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });