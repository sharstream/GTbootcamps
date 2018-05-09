// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// Constructor class for Characters
const Character = require("./Character");
// Database operations class
const Connection = require("./connection");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// DB Connection
const connection = new Connection();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/all", (req, res) => {
  res.sendFile(path.join(__dirname, "all.html"));
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/characters", async (req, res) => {
  const characters = await connection.queryAll();
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/characters/:character", async (req, res) => {
  const { params: { character: chosen } } = req;
  console.log(chosen);

  try {
    const character = await connection.queryOne(chosen);
    console.log(character);
    return res.json(character);
  } catch {
    return res.json(false);
  }
});

// Create New Characters - takes in JSON input
app.post("/api/characters", async (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  const { body: { name, role, age, forcePoints } }  = req;
  const newCharacter = new Character(name, role, age, forcePoints);

  const update = await connection.push(newCharacter);

  res.json(update);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
