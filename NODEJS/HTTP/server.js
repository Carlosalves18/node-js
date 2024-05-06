const http = require('node:http')

const PORT = 3333 

//Ex:01
// const server = http.createServer((request, response)=>{
//     response.write("Olá, meu Nobre! Módulo HTTP")
//     response.end()
// })


//Ex: 02
// const server = http.createServer((request, response)=>{
//     response.writeHead(201,{"Content-Type":"text/plan"})
//     response.end('Usuário Criador')
// })

//Ex:03
// const server = http.createServer((request, response)=>{
//     if(request.url === '/'){//localhost:3333
//         response.writeHead(200,{'Content-type': 'text/plan'})
//         response.end('Página Inicial')

//     }else if(request.url === '/sobre'){ //localhost:3333/sobre
//         response.writeHead(200,{'Content-type': 'text/plan'})
//         response.end('Página Sobre')

//     }else{
//         response.writeHead(404,{'Content-type': 'text/plan'})
//         response.end('Página não Encontrada')

//     }

    
//})

//Ex:04
// const server = http.createServer((request, response)=>{
//     if(request.url === '/'){
//         response.writeHead(200,{'Content-type': 'text/html'})
//         response.write("<meta charset=utf8>")
//         response.write('<h1>Página Inicial<h1>')
//         response.end();
//     }else if(request.url === '/contatos'){
//         response.writeHead(200,{'Content-type': 'text/html'})
//         response.write("<meta charset=utf8>")
//         response.write('<h1>Página Inicial<h1>')
//         response.end();
//     }else{
//         response.writeHead(404,{'Content-type': 'text/html'})
//         response.write("<meta charset=utf8>")
//         response.write('<h1>Página Inicial<h1>')
//         response.end();


//     }
// })

//Ex:05
const obj = {
    nome: 'Carlos',
    idade: 17,
    profissao: 'Jogador Profissional'
}

const server = http.createServer((request, response)=>{
     if(request.url === '/'){
        response.writeHead(200,{'Content-type': 'application/json'})
        response.end(JSON.stringify(obj))
     }else if(request.url === '/contatos'){
        response.writeHead(200,{'Content-type': 'application/json'})
        response.end(JSON.stringify({message: 'Pagina Contato'}))
     }else{
        response.writeHead(404,{'Content-type': 'application/json'})
        response.end(JSON.stringify({message: 'Pagina não encontrada'}))
     }

    })     

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT ${PORT}`)
})