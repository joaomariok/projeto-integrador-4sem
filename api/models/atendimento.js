const Sequelize = require('sequelize');
const database = require('../db');
const Paciente = require('./paciente');
const Prontuario = require('./prontuario');

const Atendimento = database.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    horaEntrada: {
        type: Sequelize.TIME,
        allowNull: false
    },
    horaSaida: {
        type: Sequelize.TIME,
        allowNull: false
    },
    permanencia: {
        type: Sequelize.TIME,
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Paciente,
            key: 'id'
        }
    },
    prontuario_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Prontuario,
            key: 'id'
        }
    }
})

module.exports = Atendimento;