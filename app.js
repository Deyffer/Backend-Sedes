const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const rutaConsultorios = require("./routes/consultoriosRouter");
const rutaSedes = require("./routes/sedesRouter");
const rutaubicacion = require("./routes/ubicacionRouter");

//instancia la coneccion a la base de datos del archivo DB/conexionDB.js    
const conexionDB = require("./DB/conexionDB");

app.use(cors());
app.use(bodyParser.json());
app.use("/consultorios", rutaConsultorios);
app.use("/sedes", rutaSedes);
app.use("/ubicacion", rutaubicacion )

app.get("/", (req, res) => {
    res.json({ "message": "Hello World_2" });
})

app.post("/", (req, res) => {
    res.json({ "message": "Hello World post" });
})

app.delete("/:id", (req, res) => {
    res.json({ "message": "Hello World delete" });
})


app.listen(5000, () => {
    console.log("Server running on port 5000");
})