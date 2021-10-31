const Sequelize = require('sequelize');
const database = require('../database');

const Paciente = database.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    genero: {
        type: Sequelize.STRING(1),
        allowNull: false,
    },
    multiplicidade: {
        type: Sequelize.INTEGER,
    }
})

module.exports = Paciente;