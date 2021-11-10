const { sleep } = require("./helper");
const database = require('.');
const md5 = require("md5");

// Import models
const Paciente = require('../models/paciente');
const Atendimento = require('../models/atendimento');
const Prontuario = require('../models/prontuario');
const Usuario = require("../models/usuario");
const dummyData = require("./dummydata");

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

async function createDummyEntry(_paciente, _prontuario, _atendimento) {
    // console.log(_paciente);
    // console.log(_prontuario);
    // console.log(_atendimento);   

    const paciente = await Paciente.create({
        idade: _paciente.idade,
        genero: _paciente.genero,
        multiplicidade: _paciente.multiplicidade
    });

    const prontuario = await Prontuario.create({
        paciente_id: paciente.id,
        sintomas: _prontuario.sintomas,
        veioAObito: _prontuario.veioAObito,
        transferencia: _prontuario.transferencia,
        gravidade: _prontuario.gravidade,
        possuiComorbidades: _prontuario.possuiComorbidades
    });
  
    const atendimento = Atendimento.create({
        horaEntrada: _atendimento.horaEntrada.replace("T", " "),
        horaSaida: _atendimento.horaSaida.replace("T", " "),
        paciente_id: paciente.id,
        prontuario_id: prontuario.id
    });
}

async function createDummyData() {
    console.log("[DB] Creating dummy data");
    dummyData.forEach(async (registro, index) => {
        console.log(`[DB] Creating dummy entry ${index + 1}/${dummyData.length}`);
        await createDummyEntry(registro.paciente, registro.prontuario, registro.atendimento);
    });
    console.log("[DB] Finished creating dummy data");
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

            if (process.env.DEBUG) {
                await createDummyData();
            }

            break;
        } catch(err) {
            console.log(`[DB] Retrying connection to database: ${retryNumber}/${MAX_CONNECTION_RETRY_COUNT}`);
            console.log(err.parent);
            await sleep(RETRY_CONNECTION_TIMER);
        }
    }
}

module.exports = { isDatabaseConnected, tryDatabaseConnection };