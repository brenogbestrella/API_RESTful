const express = require("express");

const controller = require("../controllers/PropostaAceitaController");

const router = express.Router();


router.get("/propostasaceitas", controller.getPropostasAceitas)
router.get("/ordensdecompra", controller.getPropostasPipedrive)

module.exports = router;