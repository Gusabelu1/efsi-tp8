import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Producto from './components/Producto';
import productosContext from './contexts/productosContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';

function App() {
  const [productos, setProductos] = useState()

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(res => {
      setProductos(res.products)
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <productosContext.Provider value={{ productos, setProductos }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="/producto/:id" element={<Producto />}/>
        </Routes>
      </BrowserRouter>
    </productosContext.Provider>
  );
}

export default App;
