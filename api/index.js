const keys = require("./keys");

// Express app setup
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Connection to mysql database
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: keys.mysqlHost,
    user: keys.mysqlUser,
    password: keys.mysqlPass,
    database: keys.mysqlName,
    port: keys.mysqlPort
});

var isConnected = false;

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database!");
    isConnected = true;
});

// Express route handlers
app.get("/", (req, res) => {
    res.send(isConnected ? "Banco conectado" : "Não foi possível realizar conexão");
});

app.get("/tables", (req, res) => {
    sqlQuery = "SHOW TABLES";
    connection.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(5000, (err) => {
    console.log("Listening on port 5000");
});