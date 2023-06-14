var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select sum(acertos) as acertos, sum(erros) as erros
        from resultado where fkQuiz = 1
        and fkUsuario = ${idUsuario}
        order by idResultado desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(acertos) as acertos, sum(erros) as erros
        from resultado where fkQuiz = 1
        and fkUsuario = ${idUsuario}
        order by idResultado desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `select sum(acertos) as acertos, sum(erros) as erros
        from resultado where fkQuiz = 1
        and fkUsuario = ${idUsuario}
        order by idResultado desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select livro.nome, (select count(estrelas) from  estrelas join livro on fkLivro = idLivro where estrelas = 1 group by fkLivro) as 'estrelas1',
        (select count(estrelas)
        from estrelas join livro on fkLivro = idLivro where estrelas = 2) as 'estrelas2',
        (select count(estrelas)
        from estrelas join livro on fkLivro = idLivro where estrelas = 3) as 'estrelas3',
        (select count(estrelas)
        from estrelas join livro on fkLivro = idLivro where estrelas = 4) as 'estrelas4',
        (select count(estrelas)
        from estrelas join livro on fkLivro = idLivro where estrelas = 5) as 'estrelas5' from estrelas
        join livro on fkLivro = idLivro group by fkLivro;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ` select sum(acertos) as acertos, sum(erros) as erros
        from resultado where fkQuiz = 1
        and fkUsuario = ${idUsuario}
        order by idResultado desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` select sum(acertos) as acertos, sum(erros) as erros
        from resultado where fkQuiz = 1
        and fkUsuario = ${idUsuario}
        order by idResultado desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal
}
