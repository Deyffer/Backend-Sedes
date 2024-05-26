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

//Ruta para eliminar un consultorio
router.delete("/:id", async (req, res) => {
    Consultorio.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
})

//Ruta para actualizar un consultorio
router.patch("/:id", async (req, res) => {
    Consultorio.findByIdAndUpdate(req.params.id, req.body)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        })
})


module.exports = router;
