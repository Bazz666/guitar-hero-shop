const express = require('express');
const router = express.Router();

// Importa el controlador de productos
const productosController = require('../controllers/productosController');

// Rutas
router.get('/', productosController.obtenerProductos);
router.get('/:id', productosController.obtenerProductoPorId);
// Puedes agregar más rutas según tus necesidades

module.exports = router;