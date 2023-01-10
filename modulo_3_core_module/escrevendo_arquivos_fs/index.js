const fs  = require('fs');
const http = require('http');
const url = require('url');
const port = 3000;

//criando o server
const server = http.createServer((req, res)=>{

    //requisitando  e buscando  na url o parametro nome;
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name;

    if(!name){
        //renderizando um arquivo html com file system;
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Contenty-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        //Inserindo append para adicionar os nome ao nosso arquivo txt, mais o nameNewline para poder adicionar um abaixo do outro dentro do arquivo.txt.

        const nameNewline = name +',\r\n';

        fs.appendFile('arquivo.txt',nameNewline,function(err,data){
            res.writeHead(302,{
             location:'/',
            })
            return res.end();
         })


        // Se não obtiver um resgistro ele ira nos redirecionar a pagina home e nos ecrevendo um arquivo.txt com o nome do usuario;
        // fs.writeFile('arquivo.txt', name,function(err,data){
        //    res.writeHead(302,{
        //     location:'/',
        //    })
        //    return res.end();
        // })
    }
})

//listen port
server.listen(port,()=>{
    console.log(`Server is running ${port}`)
})