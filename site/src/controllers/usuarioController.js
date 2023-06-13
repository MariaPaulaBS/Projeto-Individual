var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
   

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }  else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function limpar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    
   var idUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    
  if (idUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.limpar(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrarQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var erros = req.body.errosServer;
    var acertos = req.body.acertosServer;
   var fkUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    if (erros == undefined) {
        res.status(400).send("Seus erros está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    } 
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarQuiz(acertos, erros, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarQuizPerso(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var perso = req.body.persoServer;
   var fkUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    if ( perso == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarQuizPerso(perso, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// Livros 



function cadastrarLivro1(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrelas1 = req.body. estrelas1Server;
   var fkUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    if ( estrelas1 == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro1(estrelas1, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}





function cadastrarLivro2(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrelas2 = req.body.estrelas2Server;
   var fkUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    if ( estrelas2 == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro2(estrelas2, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function cadastrarLivro3(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrelas3 = req.body.estrelas3Server;
    console.log("controler 1" + estrelas3)
    var fkUsuario = req.body.fkUsuarioServer;
    console.log("controler 1" + fkUsuario)
   

    // Faça as validações dos valores
    if ( estrelas3 == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro3(estrelas3, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarLivro4(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrelas4 = req.body.estrelas4Server;
   var fkUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    if ( estrelas4 == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro4(estrelas4, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarLivro5(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrelas5 = req.body.estrelas5Server;
   var fkUsuario = req.body.fkUsuarioServer;
   

    // Faça as validações dos valores
    if ( estrelas5 == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    }
    else if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarLivro5(estrelas5, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    entrar,
    cadastrar,
    limpar,
    cadastrarQuiz,
    cadastrarQuizPerso,
    cadastrarLivro1,
    cadastrarLivro2,
    cadastrarLivro3,
    cadastrarLivro4,
    cadastrarLivro5,
    listar,
    testar
}