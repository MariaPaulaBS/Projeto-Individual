var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/limpar", function (req, res) {
    usuarioController.limpar(req, res);
})

router.post("/cadastrarQuiz", function (req, res) {
    usuarioController.cadastrarQuiz(req, res);
})

// Livros 
router.post("/cadastrarLivro1", function (req, res) {
    usuarioController.cadastrarLivro1(req, res);
})
router.post("/cadastrarLivro2", function (req, res) {
    usuarioController.cadastrarLivro2(req, res);
})
router.post("/cadastrarLivro3", function (req, res) {
    usuarioController.cadastrarLivro3(req, res);
})
router.post("/cadastrarLivro4", function (req, res) {
    usuarioController.cadastrarLivro4(req, res);
})
router.post("/cadastrarLivro5", function (req, res) {
    usuarioController.cadastrarLivro5(req, res);
})



router.post("/cadastrarQuizPerso", function (req, res) {
    usuarioController.cadastrarQuizPerso(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;