const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Esse basePath seria nossa pasta base onde vai ficar o nossos HTML;
const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.get("/contato", (req, res) => {
  res.sendFile(`${basePath}/contato.html`);
});

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});


//usando o middleware
const checkAuth = function(req,res,next){
  req.authStatus = true;

  if(req.authStatus){
    console.log('Esta logado com sucesso')
    next();
  }else{
    console.log('Não esta logado , porfavor logar novamente')
    next()
  }
}

app.use(checkAuth);
