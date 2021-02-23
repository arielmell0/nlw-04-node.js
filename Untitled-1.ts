



// function enviarEmail(para, id, assunto, texto){
//     //Biblioteca de envio de e-mail

//     console.log(para, id, assunto, texto)
// }

// class EnviarEmailUsuario {

//     send(){
//         enviarEmail("arielmello@rede.ulbra.br", 2268, "Olá!", "Como vai o seu código?")
//     }
// }
interface DadosEnviarEmail {
    para: String,
    id: String,
    assunto: String,
    texto: String
}

//desestruturação da interface abrindo as chaves evitando assim fazer referências a classe a todo instante
function enviarEmail({para, id, assunto, texto}: DadosEnviarEmail) {
    console.log(para, id, assunto, texto)
}

class EnviarEmailUsuario {
    send() {
        enviarEmail(
            para: "arielmello@rede.ulbra.br",
            id: "2268",
            assunto: "Olá!",
            texto: "Como está ficando seu código?"
            )
    }
}