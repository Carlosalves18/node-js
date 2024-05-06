const path = require('node:path')

const extensao = path.extname('documento.css')

if(extensao === '.html'){
    console.log('Arquivo enviado')
}else{
    console.log('Arquivo com extensão diferente')
}

console.log(extensao)