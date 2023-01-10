//modulo externo
const minimist = require('minimist');

//modulo interno
const soma = require('./soma.js').soma
soma(5,5);

const args = minimist(process.argv.slice(2));

const a = parseInt(args['a']);
const b = parseInt(args['b']);

soma(a,b);