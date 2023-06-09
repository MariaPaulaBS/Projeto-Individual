var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/perso/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.get("/ultimas/livro", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});
router.get("/tempo-real/perso/:idUsuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})


module.exports = router;