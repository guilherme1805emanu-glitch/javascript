import http from 'http';
import * as routes from './routes.js';


const server = http.createServer((request, response) => {
    console.log(request.url);

    // aqui eu estou verificando as rotas existentes e dando uma resposta
    if (request.url == "/") {
        if (request.method === "GET") {
            response.end("Recuperando usuário")
        }
        routes.inicialRoute(response)
        return
    }
    if (request.url == "/youth") {
        if (request.method === "GET") {
            response.end("Recuperando usuário")
        }
        if (request.method === "POST") {
            response.end("Criando usuário")
        }
        if (request.method === "PATCH") {
            response.end("Atualizando usuário")
        }
        if (request.method === "DELETE") {
            response.end("Deletando usuário")
        }
        routes.youthRoute(response)
        return
    }
    if (request.url == "/space") {

        if (request.method === "GET") {
            response.end("Recuperando usuário")
        }
        if (request.method === "POST") {
            response.end("Criando usuário")
        }
        if (request.method === "PATCH") {
            response.end("Atualizando usuário")
        }
        if (request.method === "DELETE") {
            response.end("Deletando usuário")
        }
        routes.spaceRoute(response)
        return
    }
    if (request.url == "/guilherme") {

        if (request.method === "GET") {
            response.end("Recuperando usuário")
        }
        if (request.method === "POST") {
            response.end("Criando usuário")
        }
        if (request.method === "PATCH") {
            response.end("Atualizando usuário")
        }
        if (request.method === "DELETE") {
            response.end("Deletando usuário")
        }
        routes.guilhermeRoute(response)
        return
    }
    // Aqui tratamos qualquer rota que não existe
    else {
        routes.notFoundRoute(response)
        return
    }
});

server.listen(3001, () => console.log("server is running"));