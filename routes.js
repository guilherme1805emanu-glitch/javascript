const header = { "content-type": "text/plain; charset=utf-8" };


export function inicialRoute(response) { 
    response.writeHead(200, header);
    response.end("esta é a rota inicial")
}
export function youthRoute(response) { 
    response.writeHead(200, header);
    response.end("Esta é a rota da escola da juventude(youth)")
}
export function spaceRoute(response) {
    response.writeHead(200, header);
    response.end("Esta é a rota da escola espacial(space)")
}
export function guilhermeRoute(response) {
    response.writeHead(200, header);
    response.end("Esta rota é especialmente para o uso do Dr.Guilherme")
}
export function notFoundRoute(response) {
    response.writeHead(200, header);
    response.end(`Erro 404: A rota '${request.url}' não existe!`);
}
