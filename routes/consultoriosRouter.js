// const { request } = require("express");
const express = require("express");
const router = express.Router();
const Consultorio = require("../models/consultorio");

router.post("/agregar", async (req, res) => {
    const consultorio = new Consultorio({
        codigo: req.body.codigo,
        tipoConsultorio: req.body.tipoConsultorio,
        estado: req.body.estado,
        observaciones: req.body.observaciones,
        Sede: req.body.Sede,
    });

    consultorio.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

//ruta get para obtener todos los consultorios
// router.get("/:id", async (req, res) => {
router.get("/consultar", (req, res) => {
    Consultorio.find()
        .then(consultorios => {
            res.json(consultorios);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});

router.delete("/:codigo", async (req, res) => {
    try {
        const consultorio = await Consultorio.findOneAndDelete({ codigo: req.params.codigo });
        if (!consultorio) {
            return res.status(404).json({ message: "Consultorio no encontrado" });
        }
        res.json(consultorio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Ruta para actualizar un consultorio
router.patch("/:codigo", async (req, res) => {
    Consultorio.findByIdAndUpdate(req.params.codigo, req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
})


module.exports = router;
