import express from "express";
import exphbs from "express-handlebars";
const port = 3000;
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", 'handlebars');

app.get('/dashboard',(req,res)=>{
  res.render('dashboard')
})

app.get('/', (req, res) => {
  //cração de variaves para mostrar no Front-End
  const users = {
    name:'Paulo',
    surname:'Silva',
  }

  const auth = true;

  //Passamos a veriavél para poder estar renderizando no Front-End
  res.render('home',{users:users,auth});

});




app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
