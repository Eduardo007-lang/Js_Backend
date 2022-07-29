const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_pagamentos', 'root', 'Mcpjst22p',{
        host: 'localhost',
        dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};