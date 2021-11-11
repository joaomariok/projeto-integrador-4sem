const Sequelize = require('sequelize');
const database = require('../database');
const Paciente = require('./paciente');

const Prontuario = database.define('prontuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paciente_id: {
      type: Sequelize.INTEGER,
      references: {
          model: Paciente,
          key: 'id',
      }
    },  
    sintomas: {
        type: Sequelize.TEXT,
    },
    veioAObito: {
        type: Sequelize.BOOLEAN,
    },
    transferencia: {
        type: Sequelize.TEXT,
    },
    gravidade: {
        type: Sequelize.STRING(6),
    },
    vacinadoCovid: {
        type: Sequelize.STRING(5),
    },
    possuiComorbidades: {
        type: Sequelize.BOOLEAN,
    }
})

module.exports = Prontuario;