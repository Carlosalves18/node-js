
console.log(process.argv)

const args = process.argv.slice(2)

console.log(args);
//['nome=Carlos', 'idade=17']
const nome = args[0].split('=')[1]
console.log(nome);

const idade = console.log(`O nome do usuário: ${nome} e idade${idade}`)