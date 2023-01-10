# Instalando o pacote do minimist

    Estaremos trabalhando com um pacote chamado minimist , que  nos ajuda a ler argumentos, através da linha de comando. para instalarmos podemos seguir a seguinte instrução no terminal node:

        npm install minimist

#  trabalhando com o modulo minimist

    Apos fazer ainstalação do modulo como vimos acima podemos estar passando alguns parametros como versmos abaixo para poder estar lendo os argumentos passados, como veremos nome, idade:

    1.Crie um arquico com o nome index.js ou outro nome que achar que fique mais confortavél, feito o seguinte passa o segunite raciocinio abaixo:

    //importando o modulo:
    const minimist = require('minimist');
    const argumento = minimist(process.argv(2));
    console.log(args)

    2.Indo ao terminal, você pode estar acessando a pasta com o seguinte nome do projeto real, verifique se esta onde o arquivo index.js vai estar disponivel, verifando e estando de acordo digite o seguinte comando:

    node index.js --nome=Paulo --idade=23

    Ele no final ira imprir os seguintes argumentos que colocamos em nosso argumento como visto acima nome e idade;

    Para podermos estar acessando os indices de cada elemento, usamos o seguinte comando no arquivo index.js:

    const nome = args['nome'];
    const idade = args['idade'];
    console.log(nome,idade)

    E quando imprimimos no console ele ira trazer os seguintes parametros abstraidos com nome e idade.