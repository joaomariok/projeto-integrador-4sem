const Sequelize = require('sequelize');
const database = require('../database');
const Paciente = require('./paciente');
const Prontuario = require('./prontuario');

const Atendimento = database.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    horaEntrada: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    horaSaida: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Paciente,
            key: 'id',
        }
    },
    prontuario_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Prontuario,
            key: 'id',
        }
    }
})

module.exports = Atendimento;