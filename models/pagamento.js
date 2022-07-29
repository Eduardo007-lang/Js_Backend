const db = require('./db');

const pagamento = db.sequelize.define('tb_pagamentos',{

    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    },
});


// //Criando a tabela
// pagamento.sync({force: true});

module.exports = pagamento;
