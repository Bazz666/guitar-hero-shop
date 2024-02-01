



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Productos from './pages/ProductosPage/ProductosPage'
// import Productos from './components/Productos';

const AppRouter = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} /> {/* Asigna tu componente Home a la ruta raíz */}
        <Route path="/productos" element={<Productos />} /> {/* Asigna tu componente Productos a la ruta /productos */}
        {/* Agrega más rutas según sea necesario */}


      {/* <Route path="/productos" element={<Productos />} /> */}
      {/* Otras rutas pueden agregarse aquí */}
    </Routes>
  );
};

export default AppRouter;
