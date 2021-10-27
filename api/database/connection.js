const { sleep } = require("./helper");
const database = require('.');
const md5 = require("md5");

// Import models
const Paciente = require('../models/paciente');
const Atendimento = require('../models/atendimento');
const Prontuario = require('../models/prontuario');
const Usuario = require("../models/usuario");

// Constants
const RETRY_CONNECTION_TIMER = 10 * 1e3;
const MAX_CONNECTION_RETRY_COUNT = 100;

let isConnected = false;

function isDatabaseConnected() {
    return isConnected;
}

async function createRootUser() {
    const userInDatabase = await Usuario.findOne({
        where: {
            username: process.env.ROOT_USER,
        }
    });

    if (Boolean(userInDatabase)) return;

    const rootUser = await Usuario.create({
        username: process.env.ROOT_USER,
        password: md5(process.env.ROOT_PASS),
    });
}

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

async function tryDatabaseConnection() {
    for (retryNumber = 0; retryNumber < MAX_CONNECTION_RETRY_COUNT; retryNumber++) {
        try {
            await database.authenticate();
            console.log("[DB] Connected to database!");
            await trySyncDatabase();
            isConnected = true;
            await createRootUser();
            break;
        } catch(err) {
            console.log(`[DB] Retrying connection to database: ${retryNumber}/${MAX_CONNECTION_RETRY_COUNT}`);
            console.log(err.parent);
            await sleep(RETRY_CONNECTION_TIMER);
        }
    }
}

module.exports = { isDatabaseConnected, tryDatabaseConnection };