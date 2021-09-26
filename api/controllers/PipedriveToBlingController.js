//Controller para realizar o POST dos dados convertidos do Pipedrive para o Bling

const BlingService = require("../services/BlingService");
const XmlService = require("../services/JsonToXmlService")

const pipedriveToBling = {
    postBling: async (req, res) => {
        const { cliente, volumes, itens } = XmlService.converterParaXml //Definir os itens do request como o objeto convertido para XML
        const proposta = await BlingService.postProposta(    //Método POST para o BLING definido no BlingService
            cliente,
            volumes,
            itens,
        );
        return res.json(proposta)
    },

}

module.exports = pipedriveToBling
