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
        },
        direccion: {
            type: String,
            required: true,
        },
        ciudad: {
            nombre: {
                type: String,
                required: true,
            },
            codigo: {
                type: String,
                required: true,
                unique: true
            }
        },
        departamento: [
            {
                nombre: {
                    type: String,
                    required: true,
                },
                codigo: {
                    type: String,
                    required: true,
                    unique: true
                }
        }]
    },
    {
        collection: "sedes",
        versionKey: false
    }
);
module.exports = mongoose.model("sede", SedeSchema);