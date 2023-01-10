# Trabalhando com modulos internos

    Modulos internos são modulos que podemos estarmos , baixando de um site que ja tenha esses modulos prontos como exemplo o NPM, ou modulos que são criados por nos mesmo e como podemos estar fazendo o seguinte:

    1.Temos que criar uma pasta com o seguinte nome [exemplo_modulos_internos].
    2.Feito seguinte vamos estar criando um arquivo com o nome "index.js".
        2.1 - Com isso feito podemos estar criando um arquivo com o nome como exemplo que iremos criar [modulo_de_soma.js];
        //importando e deixando o modulo disponivel para exportamos em outro arquivo;
        
        module.exports = {
            soma(a ,b){
                console.log(a+b)
            }
        }

        Acima criamos um modulo que nos ajuda a fazer uma soma, feito o seguinte, usamos a seguinte instrução para poder deixar esse arquivo disponivél para poder estar sendo importado, em um outro documento e como faremos isso veja a seguir.
    3. Fazendo o nosso arquivo de modulo ja temos o nosso arquivo index.js criado, sendo assim ja podendo dentro dele estar importando o modulo que criamos para podermos estar execultando atráves do node.js. Então vamos lá ver como poderemos fazer isso:

        //importando um arquivo no index.js

        const nossoModulo = require('./modulo_soma');
        const soma = nossoModulo.soma

        soma(2,5);
    
        3.1 - feito o seguinte teremos todos os requisitos disponivéis para poder ja estar execultando em nosso terminal node.