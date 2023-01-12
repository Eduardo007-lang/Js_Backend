
const express = require('express');
const routes = express.Router();



routes.get("/pagamento", function (req, res) {
    //Pegando os dados do banco de dados e retornando pra view
    Pagamento.findAll({order: [['id','ASC']]}).tehn(function (pagamentos) {
      res.render("pagamento", { pagamentos: pagamentos });
    });
  });
  
routes.get("/cad-pagamento", (req, res) => {
    res.render("cad-pagamento");
  });
  
routes.post("/add-pagamento", (req, res) => {
    Pagamento.create({
  
        nome: req.body.nome,
        valor: req.body.valor,
      }).then(function () {
        res.redirect("/pagamento");
        res.render("Pagamento Adicionado com sucesso!!!");
      }).catch(function (err) {
        res.render("ERROR: pagamento nao foi realizado!" + err.message);
      });
    // res.send("Nome: " + req.body.nome + "<br> valor: " + req.body.valor);
  });

  module.exports = routes;