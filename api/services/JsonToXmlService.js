//Transformar o objeto do Pipedrive em XML para o Bling


const jsonXml = require("js2xmlparser"); // Usei essa lib https://www.npmjs.com/package/js2xmlparser

const XmlService = {
    converterParaXml: async (objetoPipedrive) => {
        const objeto = {
            pedido: [
                {
                    cliente: { nome: objetoPipedrive.creator_user_id.name, email: objetoPipedrive.creator_user_id.email} // Dados trazidos do "data.data" do Pipedrive
                },
                {
                    volumes: {
                        volume: {
                            servico: "SEDEX - CONTRATO",
                            codigoRastreamento: "SG016634880BR"  // Exemplo tirado do site de ajuda da Bling (https://ajuda.bling.com.br/hc/pt-br/articles/360047064693-POST-pedido#h_01F7NW99Y3N0Q2Z1Z8BH360XYK)
                        }
                    }
                },
                {
                    items: {
                        item: { codigo: 003, descricao: "Teclado 003", vlr: objetoPipedrive.value} //Exemplo tirado do site de ajuda da Bling (https://ajuda.bling.com.br/hc/pt-br/articles/360047064693-POST-pedido#h_01F7NW99Y3N0Q2Z1Z8BH360XYK)
                    }
                }
            ]
        }
        
        return jsonXml.parse("pedido", objeto);
    }   
}

module.exports = XmlService;