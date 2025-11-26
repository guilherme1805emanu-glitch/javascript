import http from 'http';
import * as routes from '../routes.js';


const server=http.createServer((request, response) =>{
    console.log(request.url);

    const header = { "content-type": "text/plain; charset=utf-8" };

    // aqui eu estou verificando as rotas existentes e dando uma resposta
    if (request.url == "/") {
        routes.inicialRoute(response)
        return
    }
    if (request.url == "/youth") {
        routes.youthRoute(response)
        return
    }
    if (request.url == "/space") {
        routes.spaceRoute(response)
        return
    }
    if (request.url == "/guilherme") {
        routes.guilhermeRoute(response)
        return
    }
    // Aqui tratamos qualquer rota que não existe
    else{
        routes.notFoundRoute(response)
        return
    }
});

server.listen(3001,()=> console.log("server is running"));