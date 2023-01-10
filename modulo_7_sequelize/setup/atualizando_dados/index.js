const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conection')

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

//Sincronizando os dados do banco e validando somente se as tabelas estiverem criadas;
conn.sync().then(() => {
  app.listen(3000);
}).catch((err) => console.log(err));

