const fs = require('fs');
console.log('inicio');

fs.writeFile('arquivo.txt','Pronto para a edição',function(err){
    setTimeout(function(){
        console.log('Arquivo criado')
    },1000)
})

console.log('Fim')