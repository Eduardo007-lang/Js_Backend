const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Pagamento = require("./models/pagamento");
const moment = require("moment");

//Template
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: false,

    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },

    helpers: {
      formatDate: (date) => {
        return moment(date).format("DD/MM/YYYY");
      }
    }
  })
);

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rotas
app.get("/pagamento", function (req, res) {
  //Pegando os dados do banco de dados e retornando pra view
  Pagamento.findAll({order: [['id','ASC']]}).then(function (pagamentos) {
    res.render("pagamento", { pagamentos: pagamentos });
  });
});

app.get("/cad-pagamento", function (req, res) {
  res.render("cad-pagamento");
});

app.post("/add-pagamento", function (req, res) {
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

app.listen(8080);
