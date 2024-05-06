import http from 'node:http'

const PORT = 3333

/** 5 Rotas
 *  GET -> liistar todos os usuários
 *  GET -> Lista UM ÙNICO usuário
 *  PUT -> Atualizar um usuário
 *  DELETE -> Deletar um usuário
 */
/** 3 TIPOS DE REQUISIÇÃO
 *  body -> via formulario -> POST
 *  
 */
const usuarios = []//Base de dados
const server = http.createServer((request, response)=>{
    const {method, url} = request;
    //localhost:3333/usuario/{id}
    if(method === 'GET' && url === '/usuarios'){
    }else if(method === 'POST' && url === '/usuarios'){   
        let body = ''
        request.on('data', (chunk)=>{
            //linha 1
            //linha 2
            //linha 3
            body += chunk.toString()
        })
        request.on('end' , ()=>{
            const novoUsuario = JSON.parse(body)
            novoUsuario.id = usuarios.length + 1
            response.writeHead(201, {'Content-Type':'application/json'})
            response.end(JSON.stringify(novoUsuario))

        })
    }else if(method === 'PUT' && url.startsWith === '/usuarios/'){    
    }else if(method === 'DELETE' && url.startsWith === '/usuarios/'){    
    }else if(method === 'GET' && url.startsWith === '/usuarios/'){
       const id = url.split('/')[2]
       const usuario = usuario.find((usuario)=>usuario.id == id)
       if(!user){
        response.writeHead(404, {"Content-Type": 'application/json'})
        response.end(JSON.stringify({msssage: 'Usuário não encontrado'}))
        return
       }
       response.writeHead(200, {'Content-Type': 'application/json'})
       response.end(JSON.stringify(usuario))
    }else{
        response.writeHead(404,{"Content-type": "application/json"});
        response.end(JSON.stringify({message:'Rota Não EXISTE'}))
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})