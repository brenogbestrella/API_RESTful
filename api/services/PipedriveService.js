const axios = require("axios");
const pipedrive = require("pipedrive");

const PipedriveService = async () => {
    const propostaAceita = await axios.get(pipedrive, {
        api_token: "a300a42f72b6fe7cf15a0ea07aadf4ae735afbd2",
        status: "won",
    },
    
    )
    return propostaAceita.data.data;
    };
    


    module.exports = PipedriveService