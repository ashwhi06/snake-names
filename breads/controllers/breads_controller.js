const express = require("express");
const breads = express.Router();
const Bread = require("../models/bread.js");

// INDEX
breads.get("/", (req, res) => {
  res.render("Index", {
    breads: "Bread",
    title: "View Index Page",
  });
  //res.send(Bread) // Displays the array of BREAD objects
});

//NEW
breads.get("/new", (req, res) => {
  res.render("New", {
    title: "View New Page",
  });
});

//SHOW /breads/{0}
breads.get("/:arrayIndex", (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render("Show", {
      bread: Bread[req.params.arrayIndex],
      title: "View Show Page",
    });
  } else {
    res.send("404: Bread not found");
  }
});

//CREATE
breads.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.image) {
    req.body.image  = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if (req.body.hasGluten === "on") {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.push(req.body);
  res.send('/breads');
});

module.exports = breads;
