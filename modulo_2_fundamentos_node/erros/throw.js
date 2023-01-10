const x= "10";

//checar se o numero não é inteiro;
if(!Number.isInteger(x)){
    throw new Error('O valor de x não é um numero inteiro!')
}

console.log('continua o código normalmente....')