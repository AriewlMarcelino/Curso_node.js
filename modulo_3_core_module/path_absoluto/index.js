const path = require('path');

//path absolute
console.log(path.resolve('texto.txt'));


//formar path
const midFolder = 'relatorios'
const filename = 'Matheus.txt'

const finalPath = path.join('/','arquivos', midFolder,filename);
console.log(finalPath)
