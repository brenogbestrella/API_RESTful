const express = require("express");

const controllerGet = require("../controllers/PropostaAceitaController");
// const controllerPost = require("../controllers/PipedriveToBlingController")

const router = express.Router();

//Rotas para visualização das propostas do Pipedrive
router.get("/propostasaceitas", controllerGet.getPropostas)

// router.post("/propostasaceitas", controllerPost.postBling) //Acredito que não é necessária essa rota

module.exports = router;