const mongoose = require('mongoose');
const SedeSchema = mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true,
            unique: true
        },
        nombre: {
            type: String,
            required: true,
            unique: false
        },
        direccion: {
            type: String,
            required: true,
            unique: false
        },
        consultorios: [{
            tipoConsultorio: {
                type: String,
                required: true,
                unique: false
            },
            estado: {
                type: Number,
                required: true
            },
            observaciones: {
                type: String
            }
        }]
    },
    {
        collection: "sedes",
        versionKey: false
    }
);
module.exports = mongoose.model("sede", SedeSchema);