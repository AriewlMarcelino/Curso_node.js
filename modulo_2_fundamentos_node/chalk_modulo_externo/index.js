const chalk = require('chalk');
const nota = 1;


if(nota > 9){
    console.log(chalk.bgGreen.white('Parabens voce esta aprovado!'));
}else{
    console.log(chalk.bgRed.white('Você reprovou!'))
}
