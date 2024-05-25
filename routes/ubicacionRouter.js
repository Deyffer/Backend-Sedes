const express = require("express");
const router = express.Router();
const Ubicacion = require("../models/ubicacion");
const ubicacion = require("../models/ubicacion");

router.get("/", (req, res) => {
  Ubicacion
    .find()
    .then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json({ listo: err });
    });
});

 router.delete("/:id", (req, res) => {
    Ubicacion.deleteOne({_id: req.params.id })
    .then((data) => {
        res.json(data);
    })

.catch((err) => {
    res.json({ listo: err });
});

}); 

router.put("/:id", async (req, res) => {
  try {
    const ubicacion = await Ubicacion.findByIdAndUpdate(req.params.id, req.body,{new: true});
    res.json(ubicacion);
  } catch (error) {
    console.error(error);
  }
});




router.post("/", async (req, res) => {
  console.log("la buena");
  try {
    const ubicacion = new Ubicacion(req.body);
    await ubicacion.save();
    res.json(ubicacion)
  } catch (error) {
    console.error(error);
  }
  
});



module.exports = router;
