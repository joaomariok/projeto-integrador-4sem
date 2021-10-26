const Sequelize = require('sequelize');
const database = require('../database');

const Prontuario = database.define('prontuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sintomas: {
        type: Sequelize.TEXT
    },
    veioAObito: {
        type: Sequelize.BOOLEAN,
    },
    transferencia: {
        type: Sequelize.TEXT
    },
    gravidade: {
        type: Sequelize.STRING(6)
    },
    possuiComorbidades: {
        type: Sequelize.BOOLEAN,
    }
})

module.exports = Prontuario;