export function verificando(body) {
    const errors = {}

    if (!body) {
        errors.body = "Sua requisição não possui um body"
        return errors
    }

    if (!body.nome) {
        errors.nome = "Seu body não possui um NOME"
    }

    if (!body.email) {
        errors.email = "Seu body não possui um EMAIL"
    }

    if (!body.senha) {
        errors.senha = "Seu body não possui uma SENHA"
    }
    console.log(errors);    
    return errors

}
