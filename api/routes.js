const { Router } = require("express");
const md5 = require("md5");
const { sign } = require("jsonwebtoken");

const { ensureAuthenticated } = require("./middleware/ensureAuthenticated");
const database = require('./database');
const { isDatabaseConnected } = require('./database/connection');

// Import models
const Paciente = require('./models/paciente');
const Atendimento = require('./models/atendimento');
const Prontuario = require('./models/prontuario');
const Usuario = require("./models/usuario");

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

router.post("/signup", async (req, res) => {
    const { user, password, rootPassword } = req.body;

    // Check empty fields
    if (!user || !password || !rootPassword) {
        return res.status(400).json();
    }

    // Check root password
    if (md5(rootPassword) != md5(process.env.ROOT_PASS)) return res.status(401).json();

    // Check in database
    const userInDatabase = await Usuario.findOne({
        where: {
            username: user,
        }
    });

    // Check if user exists in database
    if (Boolean(userInDatabase)) return res.status(401).json()

    // Create new user
    const newUser = await Usuario.create({
        username: user,
        password: md5(password),
    });

    // Response with token
    const token = sign(
        {
            id: newUser.id,
            user: newUser.username,
        },
        process.env.JWT_SECRET,
        {
            subject: newUser.username,
            expiresIn: "1d"
        }
    );

    const response = {
        token: token,
        user: user,
    };

    res.status(200).json(response);
});

router.post("/login", async (req, res) => {
    const { user, password } = req.body;

    // Check empty fields
    if (!user || !password) return res.status(400).json();

    // Check in database
    const userInDatabase = await Usuario.findOne({
        where: {
            username: user,
        }
    });

    // Check if user exists in database
    if (!Boolean(userInDatabase)) return res.status(404).json();

    // Check if passwords match
    if (md5(password) != userInDatabase.password) return res.status(401).json();

    // Response with token
    const token = sign(
        {
            id: userInDatabase.id,
            user: userInDatabase.username,
        },
        process.env.JWT_SECRET,
        {
            subject: userInDatabase.username,
            expiresIn: userInDatabase != process.env.ROOT_USER ? "1d" : "10m",
        }
    );

    const response = {
        token: token,
        user: user,
    }

    res.status(200).json(response);
});

module.exports = { router }