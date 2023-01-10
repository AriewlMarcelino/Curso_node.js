const readline = require('readline').createInterface({
    //Entrada
    input:process.stdin,
    Output:process.stdout,
})

readline.question('Qual a sua linguagem preferida ?',(language)=>{
    console.log(`A minha liguagem preferida é: ${language}`)
    readline.close()
});