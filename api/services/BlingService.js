//Service para realizar o POST na API da Bling

const axios = require("axios"); //Utilizei essa lib para realizar os requests (https://www.npmjs.com/package/axios)
const bling = "https://bling.com.br/Api/v2/pedido/json/";
const blingKey = "84b220975aa6caea27bd5ba3f555ef4ddbb5f37e7f7a93169f00d1a260b53ea71df94032" //APIkey gerada para o meu usuário

const BlingService = {
    postProposta: async (Xml) => {
        const result = await axios.post(bling, {}, {
            params: {
                apikey: blingKey,
                xml: Xml
            },
        })

        return result; 
    }   
};

module.exports = BlingService