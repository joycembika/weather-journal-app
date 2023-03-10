/* IMPORTS */
// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors);

// Initialize the main project folder
app.use(express.static("public"));

// Setup Server
const port = 8080;
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
