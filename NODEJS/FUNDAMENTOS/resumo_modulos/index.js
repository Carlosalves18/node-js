// 1º Criar um módulo interno com a função divisão
// 2º Importar o módulo interndo no arquivo serve.js
// 3º Baixar o módulo minimist
// 4º no terminal> node index.js --a=5 --b=5
// 5º "A soma de A + B = AB"
import soma from './soma'
import minimist from "minimist";

const moduloSoma = soma 

const argumentos = minimist(process.argv.slice(2))

const a = argumentos['a']
const b= argumentos['b']

console.log(` A soma de ${a} + ${b} = ${moduloSoma(a,b)}`)
