const PipedriveService = require("../services/PipedriveService");

const controller = {
    getPropostasPipedrive: async (req, res) => {
        const results = await PipedriveService.getOrdem();

        return res.json(results)
    },
};

module.exports = controller;