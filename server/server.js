const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
<<<<<<< HEAD
//const db = require('./app/config/db.config.js');
const init = async () => {
  try {
    //await db.sequelize.sync({ force: true });
=======

const init = async () => {
  try {
    await db.sequelize.sync({ force: true });
>>>>>>> frontend
    console.log("Synced db.");
    require("./app/routes/book.routes.js")(app);
    // set port, listen for requests
    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
  } catch (err) {
    console.log("Failed to sync db: " + err.message);
  }
};
init();