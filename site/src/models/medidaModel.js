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
    buscarMedidasEmTempoReal
}
