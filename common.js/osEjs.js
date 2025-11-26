function criarArquivos(nomeArquivo,fraseDoArquivo) {
    const fs=require("fs")
    
    // verificando se o arquivo já existe,
    // e se já existir um arquivo com esse nome 
    // ele vai me dar um error.

    if (fs.existsSync(nomeArquivo)) {
        console.error("Você já possui um arquivo co esse nome!")
    }
    else{
        return fs.writeFileSync(nomeArquivo, fraseDoArquivo)
    }
}

// criarArquivos("saudação","Olá Mundo");

// -----------------------------------------------------
const nome=" guilherme";

console.log("Boa noite" + nome);

// criarArquivos("boanoite.txt",`Boa noite ${nome}`);
// -----------------------------------------------------
let num=[1,2,3,4,5]

console.log("Os números são: " + num);

// criarArquivos("numbers.txt",`Os números são: ${num}`)
// ------------------------------------------------------
const Os=require("os");
// console.log(Os);
// console.log(Os.cpus());

// criarArquivos("cpus.txt", `${Os.cpus}`);
// ------------------------------------------------------
// criarArquivos("main.txt","Este arquivo foi um teste");

