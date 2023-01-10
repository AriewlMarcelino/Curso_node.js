import express from "express";
import exphbs from "express-handlebars";
const port = 3000;
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/", (req, res) => {
  //cração de variaves para mostrar no Front-End
  const users = {
    name: "Paulo",
    surname: "Silva",
  };

  const items = ['item1','items2','items3'];

  const auth = true;
  const approved = false;

  //Passamos a veriavél para poder estar renderizando no Front-End
  res.render("home", { users: users, auth, approved });
});

app.get('/post',(req,res)=>{

  const post ={
    title:'Aprender Node.js',
    category:'JavaScript',
    body:'Este artigo vai te ajudar a aprender Node.js...',
    comments:4,
  }

  res.render('blogpost',{post})
})

app.listen(port, () => {
  console.log(`server is running port ${port}`);
});
