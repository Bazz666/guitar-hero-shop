import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realiza la solicitud para obtener la lista de productos
    api.get('/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;