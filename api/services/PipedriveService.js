const axios = require("axios");
const pipedrive = "https://pipedrive.com/api/v1/deals";
const pipedriveKey = "a300a42f72b6fe7cf15a0ea07aadf4ae735afbd2";

const PipedriveService = {
    getOrdem: async () => {
        const propostaAceita = await axios.get(pipedrive, {
            api_token: pipedriveKey,
            status: "won",
            },
        )
    return propostaAceita.data;
    }
};
    


module.exports = PipedriveService