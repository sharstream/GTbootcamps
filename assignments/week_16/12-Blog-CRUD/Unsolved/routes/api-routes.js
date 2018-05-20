// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Post.findAll({}).then(rows => {
      res.json(rows);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    var cat = req.params.category;
    console.log(cat);
    db.Post.findAll({
      where: {
        category: cat
      }
    }).then( rows=> {
      res.json(rows);
    });
  });

  // Get route for retrieving a single post
  var findCategory= function (id) {
    // return the promise itself
    return db.Post.findOne({
      where: {
        id: id
      }
    }).then(function (category) {
      if (!category) {
        return 'not find';
      }
      return category.dataValues;
    });
  };

  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    findCategory(req.params.id).then(function (category) {
      console.log(category);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      category: req.body.category,
      body: req.body.body
    }).then( (err, rows) => {
      if(err) throw err;
      res.json(rows);
    })
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
    db.Post.destroy({
      Where: {
        id: req.params.id
      }
    }).then( row => {
      res.json(row);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Post.update(req.body, {
      Where: {
        id: req.body.id
      }
    }).then( row => {
      res.json(row);
    })
  });
};
