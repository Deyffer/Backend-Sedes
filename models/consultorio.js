const mongoose = require('mongoose');
const ConsultorioSchema = mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true,
            unique: false
        },
        tipoConsultorio: {
            type: String,
            unique: false,
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
                unique: false,
                required: true
            },
            direccion: {
                type: String,
                unique: false,
                required: true
            },
            Departamento: {
                nombre: {
                    type: String,
                    unique: false,
                    required: true
                },
                codigo: {
                    type: String,
                    unique: false,
                    required: true
                },
                Ciudad: {
                    nombre: {
                        type: String,
                        required: true
                    },
                    codigo: {
                        type: String,
                        unique: false,
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