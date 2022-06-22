const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres123',
    host: 'localhost',
    database: 'bancosolar',
    port: 5432
});

const insertarUsuario = async (usuario) => {
    const { nombre, balance } = usuario;

    try {
        const config = {
            text: "INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *",
            values: [nombre, balance]
        };

        const resp = await pool.query(config);
        return resp;
    } catch (error) {
        return error;
    }

}

const consultarUsuarios = async () => {
    try {
        const query = "SELECT * FROM usuarios";
        const resp = await pool.query(query);
        return resp;
    } catch (error) {
        return error;
    }
}

const actualizarUsuario = async (id, usuario) => {
    const { nombre, balance } = usuario;


    
}