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

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // var todo = req.params.todo;
    // if (todo) {
    //   db.Todo.findOne({
    //     where: {
    //       text: req.body.text
    //     }
    //   }).then( result => {
    //     res.json(result);
    //   });
    // }
    // else {
      db.Todo.findAll({}).then(function (result) {
        res.json(result);
      }).catch( err => {
        console.log(" Didn't work!");
        res.end();
      });
    // }
    // back to the user
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then( result => {

      res.
          json(result).
                      status(200).
                                  end();
      // res.status(200).end();
    }).catch( err =>{
      if(err) throw err;
    })
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    var idByParams = req.params.id;
    db.Todo.destroy({
      where: {
        id: idByParams
      }
    });
    res.send('successfully');
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    var param_id = req.params.id;
    db.Todo.update(req.body,{
      where: {
        id: req.body.id
      }
    }).then(() => {
      res.send('successfully');
    });
  });
};
