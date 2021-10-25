// Imports
const express = require("express");
const cors = require("cors");
const { sleep, RETRY_CONNECTION_TIMER, MAX_CONNECTION_RETRY_COUNT } = require("./helper")

// Data base imports
const database = require('./db');
const Paciente = require('./models/paciente');
const Atendimento = require('./models/atendimento');
const Prontuario = require('./models/prontuario');

// Express definitions
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Global variables
let isConnected = false;

// Connection to database
async function trySyncDatabase() {
    try {
        const resultado = await database.sync({ force: true });
        console.log("[DB] Database synchronized!");
        console.log(resultado.models);
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    for (retryNumber = 0; retryNumber < MAX_CONNECTION_RETRY_COUNT; retryNumber++) {
        try {
            await database.authenticate();
            console.log("[DB] Connected to database!");
            await trySyncDatabase();
            isConnected = true;
            break;
        } catch(err) {
            console.log(`[DB] Retrying connection to database: ${retryNumber}/${MAX_CONNECTION_RETRY_COUNT}`);
            console.log(err.parent);
            await sleep(RETRY_CONNECTION_TIMER);
        }
    }
})();

// Express route handlers
app.get("/", (req, res) => {
    res.send(isConnected ? "Banco conectado" : "Não foi possível realizar conexão");
});

app.get("/tables", (req, res) => {
    if (!isConnected) return res.status(502);

    sqlQuery = "SHOW TABLES";
    database
        .query(sqlQuery)
        .then((result) => {
            res.json(result);
    });
});

app.listen(5000, (err) => {
    console.log("Listening on port 5000");
});