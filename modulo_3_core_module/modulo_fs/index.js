const fs  = require('fs');
const http = require('http');
const port = 3000;

//criando o server
const server = http.createServer((req, res)=>{
    //renderizando um arquivo html com file system;
    fs.readFile('mensagem.html',function(err,data){
        res.writeHead(200,{'Contanty-Type':'Text/html'})
        res.write(data)
        return res.end
    })
})

//listen port
server.listen(port,()=>{
    console.log('Server is running')
})
