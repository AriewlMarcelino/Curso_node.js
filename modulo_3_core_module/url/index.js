const url = require('url');
const adress = 'https:www.meusite.com.br/catalogo?produtos=cadeiras';
const parseUrl = new url.URL(adress);

console.log(parseUrl.host);
console.log(parseUrl.search);
console.log(parseUrl.searchParams);
console.log(parseUrl.searchParams.get('produtos'));