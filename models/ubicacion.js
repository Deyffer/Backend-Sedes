const mongoose = require("mongoose");
const ubicacionschema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        codigo: {
            type: String,
            required: true,
            unique: true
        },
        departamento: [{
            
            nombre: {
                type: String,
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

