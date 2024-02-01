const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'guitar_hero_shop',
  password: 'Sehc@3105',
  port: 5432,
});
pool.connect()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));


const obtenerTodosLosProductos = async () => {
  const result = await pool.query('SELECT * FROM productos');
  return result.rows;
};

const obtenerProductoPorId = async (id) => {
  const result = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = {
  obtenerTodosLosProductos,
  obtenerProductoPorId,
};