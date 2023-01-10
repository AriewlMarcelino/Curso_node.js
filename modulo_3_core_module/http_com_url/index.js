//Chamando o modulo de Http
const http = require('http');
const port = 3000;

const server = http.createServer((req,res) =>{
    const urlinfo = require('url').parse(req.url, true);
    //Buscando o parametro nome;
    const name = urlinfo.query.name

    //statusCode
    res.statusCode = 200
    res.setHeader("Contenty-Type","text/html");
    
    //validation
    if(!name){
        res.end(
            '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text name="name"><input type="submit" value="Enviar"></form>'
        )
    }else{
        res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }
})

//Listen da porta;
server.listen(port,()=>{
    console.log(`server is running ${port}`)
})
