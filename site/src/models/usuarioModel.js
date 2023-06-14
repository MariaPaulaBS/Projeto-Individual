var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha ) VALUES ('${nome}', '${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function limpar(idUsuario) {
    var instrucao2 = `
    delete from resultado where fkUsuario = ${idUsuario};
`;
return database.executar(instrucao2);
}
function cadastrarQuiz(acertos, erros, fkUsuario  ) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", acertos, erros, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
        INSERT INTO resultado (acertos, erros, fkUsuario, fkQuiz, dtResultado  ) VALUES ('${acertos}', '${erros}','${fkUsuario}', ${1}, default);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   
}
function  cadastrarQuizPerso(perso, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", perso, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
        INSERT INTO resultado (Personagem, fkUsuario, fkQuiz, dtResultado  ) VALUES ('${perso}','${fkUsuario}', ${2}, default);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   // select estrelas from livroAvaliação where nomeLivro = 'livro q que' Group by avaliação
}



// Livros
function  cadastrarLivro1(estrelas1, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", estrelas1, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
       insert into estrelas (fkLivro, estrelas, fkUsuario)  values (1,${estrelas1}, ${fkUsuario})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   // select estrelas from livroAvaliação where nomeLivro = 'livro q que' Group by avaliação
}

function  cadastrarLivro2(estrelas2, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", estrelas2, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
       insert into estrelas(fkLivro, estrelas, fkUsuario) values (2,${estrelas2}, ${fkUsuario})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   // select estrelas from livroAvaliação where nomeLivro = 'livro q que' Group by avaliação
}

function  cadastrarLivro3(estrelas3, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",estrelas3, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
       insert into estrelas (fkLivro, estrelas, fkUsuario)  values (3,${estrelas3}, ${fkUsuario})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   // select estrelas from livroAvaliação where nomeLivro = 'livro q que' Group by avaliação
}


function  cadastrarLivro4(estrelas4, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", estrelas4, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
       insert into estrelas (fkLivro, estrelas, fkUsuario) values (5,${estrelas4}, ${fkUsuario}) 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   // select estrelas from livroAvaliação where nomeLivro = 'livro q que' Group by avaliação
}

function  cadastrarLivro5(estrelas5, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", estrelas5, fkUsuario );
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    

    var instrucao = `
       insert into estrelas (fkLivro, estrelas, fkUsuario) values (4,${estrelas5}, ${fkUsuario})
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
   // select estrelas from livroAvaliação where nomeLivro = 'livro q que' Group by avaliação
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
};