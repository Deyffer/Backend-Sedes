const express = require("express");
const router = express.Router();
const Ubicacion = require("../models/ubicacion");
const ubicacion = require("../models/ubicacion");



router.get("/consultar", (req, res) => {
  Ubicacion.find()
    .then(ubicacion => {
      res.json(ubicacion);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

router.delete("/:id", async (req, res) => {
  Ubicacion.findByIdAndDelete({ _id: req.params.id })
    .then(result => {
      res.json(result);
    })

    .catch(err => {
      res.status(500).json({ message: err });
    });

});


router.post("/agregar", async (req, res) => {
  const ubicacion = new Ubicacion({
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    departamento: req.body.departamento
  });
  
  ubicacion.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

router.patch("/:id", async (req, res) =>{
  ubicacion.findByIdAndUpdate(req.params.id, req.body)
  .then(result =>{
      res.json(result);
  })
  .catch(err =>{
      res.status(500).json({ message: err});
  });
});




module.exports = router;
