//nome
console.log(process.argv);
// separamos os indices em nossa array;
const args = process.argv.slice(2);
console.log(args);
//pegando um indice após um elemento;
let nome = args[0].split('=')[1];
console.log(nome);


//Idade
let idade = args[1].split('=')[1];
console.log(idade);


let profissao = args['Programador'];
console.log(profissao);

console.log(nome,idade,profissao);

// concatnando informações
console.log(`O nome do usuario é ${nome},e sua profissão é${profissao} e este usuario tem a idade de ${idade} anos.`)