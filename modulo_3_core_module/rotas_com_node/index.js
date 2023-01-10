const port = 3000;
const fs = require('fs');
const http = require('http');
const url = require('url');



const server = http.createServer((req,res) =>{

    const query = url.parse(req.url, true)
    const filename = query.pathname.substring(1);

    if(filename.includes('html')) {
        if(fs.existsSync(filename)){
            fs.readFile(filename,function(err,data){
                res.writeHead(200,{'Contanty-Type':'Text/html'})
                res.write(data)
                return res.end
            })
        }else{
            //404 se a apagina  não for encontrar a pagina!
            fs.readFile('404.html',function(err,data){
                res.writeHead(404,{'Contanty-Type':'Text/html'})
                res.write(data)
                return res.end
            })
        }
    }
})


server.listen(port, () =>{
    console.log(`server is running...${port}`)
})