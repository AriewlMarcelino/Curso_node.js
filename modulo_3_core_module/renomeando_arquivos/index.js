const fs = require('fs');

const arqAntigo = "arquivo.txt";
const arqNovo = "novo_arquivo.txt";

fs.rename('arquivo.txt','novo_arquivo.txt', function(err){
    if(!err){
        console.log(err)
        return
    }
    else{

    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para o arquivo com nome ${arqNovo}`)
})