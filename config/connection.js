var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5qlp5word",
  database: "burgers_db"
});


module.exports = connection;