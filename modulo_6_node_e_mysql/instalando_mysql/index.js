import express from "express";
import exphbs from "express-handlebars";
import mysql from "mysql";
const port = 3000;
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render('home');
});


//conectando o banco de dados a nossa aplicação.
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

//verificando se o banco vai estar conectado em tempo real;
connection.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Database is conected");

  app.listen(port,()=>{
    console.log(`server is connect port is ${port}`)
  })
});
