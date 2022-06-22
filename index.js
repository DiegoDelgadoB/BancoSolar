const express = require('express');
const app = express();
const  { insertarUsuario, consultarUsuarios, actualizarUsuario, eliminarUsuario, insertarTransferencia, consultarTransferencias } = require('./consultas.js');

app.listen(3000, () => console.log("Servidor activo http://localhost:3000"));

app.use(express.json());

// /GET: Devuelve la aplicación cliente.
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

// /usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.

app.post("/usuario", async (req, res) => {
    try {
        const resp = await insertarUsuario(req.body);
        res.status(201).json(resp.rows ? resp : { code: resp.code})
    } catch (error) {
        res.status(500).json({error: "Ha ocurrido un error en el servidor"});
    }
});