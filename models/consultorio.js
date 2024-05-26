const mongoose = require('mongoose');
const ConsultorioSchema = mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true,
            unique: true
        },
        tipoConsultorio: {
            type: String,
            required: true
        },
        estado: {
            type: Number,
            required: true
        },
        observaciones: {
            type: String,
        },
        Sede: {
            nombre: {
                type: String,
                required: true
            },
            direccion: {
                type: String,
                required: true
            },
            Departamento: {
                nombre: {
                    type: String,
                    required: true
                },
                codigo: {
                    type: String,
                    unique: true,
                    required: true
                },
                Ciudad: {
                    nombre: {
                        type: String,
                        required: true
                    },
                    codigo: {
                        type: String,
                        unique: true,
                        required: true
                    }
                }
            }
        }
    },
    {
        collection: "consultorios",
        versionKey: false
    }
);
module.exports = mongoose.model("consultorios", ConsultorioSchema);