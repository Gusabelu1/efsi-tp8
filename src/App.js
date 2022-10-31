import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Producto from './components/Producto';
import productosContext from './contexts/productosContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Productos from './components/Productos';

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
    <>
      <header>
        <Navbar />
      </header>
      <productosContext.Provider value={{ productos, setProductos }}>
        <BrowserRouter>
          <Routes>
            <Route index path="/home" element={<Home />}/>
            <Route path="/producto/:id" element={<Producto />}/>
            <Route path="/productos" element={<Productos />}/>
          </Routes>
        </BrowserRouter>
      </productosContext.Provider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
