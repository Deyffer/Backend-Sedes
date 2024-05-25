const express = require("express");
const router = express.Router();
const Sede = require("../models/sede");
 
router.post("/", async (req, res) => {
    const sede = new Sede({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        Consultorio: req.body.Consultorio,
    });

    sede.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

router.get("/", (req, res) =>{
    Sede.find()
    .then(sedes => {
        res.json(sedes);
    })
    .catch(err => {
        res.status(500).json({message: err});
    });
});

router.delete("/:id", async (req, res) => {
    Sede.findByIdAndDelete(req.params.id)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json({ message: err});
    });
});

router.patch("/:id", async (req, res) =>{
    Sede.findByIdAndUpdate(req.params.id, req.body)
    .then(result =>{
        res.json(resutl);
    })
    .catch(err =>{
        res.status(500).json({ message: err});
    });
});

router.get("/nombre/:nombre", async (req, res) =>{
    Sede.find({ nombre: req.params.nombre})
    .then(sedes =>{
        res.json(sedes);
    })
    .catch(err =>{
        res.status(500).json({ message: err});
    })
});

module.exports = router;

