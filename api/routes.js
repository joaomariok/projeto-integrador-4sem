const { Router } = require("express");
const md5 = require("md5");

const { ensureAuthenticated } = require("./middleware/ensureAuthenticated");
const database = require('./database');
const { isDatabaseConnected } = require('./database/connection')

const router = Router();

// ==== Database routes ====

router.get("/tables", ensureAuthenticated, (req, res) => {
    if (!isDatabaseConnected()) return res.status(502);

    sqlQuery = "SHOW TABLES";
    database
        .query(sqlQuery)
        .then((result) => {
            res.json(result);
    });
});

router.get("/database-connected", ensureAuthenticated, (req, res) => {
    res.json(isDatabaseConnected() ? "Banco conectado" : "Não foi possível realizar conexão");
});

// ==== Login routes ====

router.post("/login", (req, res) => {
    const { user, password } = req.body;
    console.log(req.body);

    // Check in database
    if (user != "userexample" || password != "123456") {
        return res.status(401).json();
    }

    const response = {
        token: md5(user + password),
        user: user,
    }

    res.json(response);
});

module.exports = { router }