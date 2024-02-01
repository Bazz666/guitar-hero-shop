const productoModel = require('../models/productoModel');


const obtenerProductos = async (req, res) => {
    try {
      const productos = await productoModel.obtenerTodosLosProductos();
      res.json(productos);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({
        error: req.app.get('env') === 'development' ? error.message : 'Error interno del servidor',
      });
    }
  };
  

const obtenerProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await productoModel.obtenerProductoPorId(id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
  } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
};