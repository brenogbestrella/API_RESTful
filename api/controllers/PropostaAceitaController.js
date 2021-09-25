const PipedriveService = require("../services/PipedriveService");
const PropostaAceita = require("../models/PropostaAceita");

const controller = {
    getPropostasPipedrive: async (req, res) => {
        const ordemsAceitas = await PipedriveService();

        return res.json(ordemsAceitas)
    },

    getPropostasAceitas: async (req, res) => {
        const propostasAceitas = await PropostaAceita.find();

        return res.json(propostasAceitas)
    }
};

module.exports = controller;