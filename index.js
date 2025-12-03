import express, { json, request, response } from 'express'
import { verificando } from './ifs.js'

const server = express()
server.use(json())

const Produtos=[]

server.get('/', (request,response) => {
    response.json(Produtos);
})

server.post('/', (request,response) => {
    const body= request.body;

    const erros = verificando(request.body)
    // Verifica se há 1 ou mais erros
    if (Object.keys(erros).length > 0) {
        response.status(400)
        response.json({ erros })
        return 
    }
    
    Produtos.push(body)

    response.send('Criando usuário com express')
})
server.patch('/:userId', (request, response) => {
    const index = parseInt(request.params.userId)

    // Verifica se o usuário existe
    if (!Produtos[index]) {
        return response.status(404).json({
            message: `Usuário com id ${index} não encontrado`
        })
    }

    const body = request.body

    // Validação
    const erro = verificando(body)
    if (Object.keys(erro).length = 0) {
        return response.status(400).json({ erro })
    }

    // Atualizando parcialmente apenas campos enviados
    Produtos[index] = {
        ...Produtos[index],
        ...body
    }

    return response.send(`Usuário ${index} atualizado com sucesso`)
})


server.listen(3001,() => {
    console.log("servidor esta rodando");
})