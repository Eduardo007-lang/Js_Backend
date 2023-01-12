const express = require("express");
const morgan = require("morgan");
const routes = require("./models/config/routes");
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
app.use(morgan('dev'));
app.use(routes);

app.use(bodyParser.json());


app.listen(8080, () => {
    console.log(`Express server listening on http://localhost:8080`);
});
