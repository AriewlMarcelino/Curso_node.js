const fs = require('fs');

if(!fs.existsSync('./minhapasta')){
    console.log('Essa pasta não existe!')
    fs.mkdirSnyc("minhapasta")
}

if(fs.existsSync('minhapasta')){
    console.log('existe!')
}