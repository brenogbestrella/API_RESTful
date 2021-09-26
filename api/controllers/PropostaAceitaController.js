//Controller para fazer o GET das propostas 

const Proposta = require("../models/PropostaAceita")
const PipedriveService = require("../services/PipedriveService");

const controller = {
    getPropostasPipedrive: async (req, res) => {
        const propostasPipedrive = await PipedriveService.getOrdem();  //Trazer propostas da plataforma Pipedrive



        return res.json(propostasPipedrive)
    },

    getPropostas: async (req, res) => {
        const propostaAceita = await Proposta.find();  // Função find() para fazer o GET no DB

        return res.json(propostaAceita)
    },
};

module.exports = controller;