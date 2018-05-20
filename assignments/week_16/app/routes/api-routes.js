// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results){
      res.json(results);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book?", function(req, res) {
    if(res.params.book){
      var book = res.params.book;
      Book.findOne({
        where: {
          book: book
        }
      }).then(function(result){
        //return all data related to the book
        return res.json(result);
      });
    }
    else {
      console.log(`No book with this name {$book} has been found.`);
      Book.findAll({}).then(function (results) {
        res.json(results);
      });
    }
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    if (res.params.genre) {
      var genre = res.params.genre;

      Book.findOne({
        where: {
          genre: genre
        }
      }).then(function(genre){
        res.json(genre);
      })
    }
    else {
      console.log(`No Genre with this name {$genre} has been found.`);
    }
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    if (res.params.author) {
      var author = res.params.author;

      Book.findOne({
        where: {
          author: author
        }
      }).then(function (author) {
        res.json(author);
      })
    } else {
      console.log(`No Author with this name {$author} has been found.`);
    }
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    if (res.params.long) {
      var long = res.params.long;

      Book.findAll({}).then(function (result) {
        var long_books = [];
        result.forEach(function (item) {
          if (item.page >= long) {
            long_books.push(item);
          }
        });
        res.json(long_books);
      })
    } else {
      console.log(`No Book with long page has been found.`);
    }
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    if (res.params.short) {
      var short = res.params.short;

      Book.findAll({}).then(function (result) {
        var short_books = [];
        result.forEach(function (item) {
          if (item.page <= short) {
            short_books.push(item);
          }
        });
        res.json(short_books);
      })
    } else {
      console.log(`No Book with short page has been found.`);
    }
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    console.log("Chirp Data:");
    console.log(req.body);

    Book.create({
      book: req.body.book,
      author: req.body.author,
      genre: req.body.genre,
      page: req.body.page
    }).then(function (results) {
      // `results` here would be the newly created book
      res.end();
    });
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    Book.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(){
      rs.end();
    })
  });

};
