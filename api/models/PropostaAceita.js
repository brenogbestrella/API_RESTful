const mongoose = require("../database");
const Schema = mongoose.Schema

const propostaAceitaSchema = new Schema ({  //Utilizei os principais itens do formulário do Pipedrive, conforme a plataforma online
    id: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const PropostaAceita = mongoose.model("PropostaAceita", propostaAceitaSchema);

module.exports = PropostaAceita;