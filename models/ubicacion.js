const mongoose = require("mongoose");
const ubicacionschema = mongoose.Schema(
    {
        departamentoNombre: {
            type: String,
            required: true
        },
        codigo: {
            type: String,
            required: true
        },
        ciudad: [{
            
            nombre: {
                type: String,
                unique: false,
                required: true
            },
            codigo: {
                type: String,
                unique: true,
                required: true
            }
        }]
    },
    {
        collection: "ubicacion",
        versionkey: false
    }

);

module.exports = mongoose.model("Ubicacion", ubicacionschema);

