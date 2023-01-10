const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//arquivos estaticos
app.use(express.stati('public'))

//Esse basePath seria nossa pasta base onde vai ficar o nossos HTML;
const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id

  //Leitura da tabela de usuarios, resgata um usuario;
  console.log(`Estamos buscando pelo usuario...${id}`)

  res.sendFile(`${basePath}/users.html`)

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



