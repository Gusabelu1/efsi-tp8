import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Producto from './components/Producto';
import productosContext from './contexts/productosContext';
import showModalContext from './contexts/showModalContext';
import carritoContext from './contexts/carritoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Productos from './components/Productos';
import Sobre from './components/Sobre';
import Contacto from './components/Contacto';
import Carrito from './views/Carrito';

function App() {
  const [productos, setProductos] = useState()
  const [showModal, setShowModal] = useState(false)
  const [carrito, setCarrito] = useState([])

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
        <showModalContext.Provider value={{ showModal, setShowModal }}>
          <carritoContext.Provider value={{ carrito, setCarrito }}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout />}>
                <Route index path="/" element={<Home />}/>
                <Route path="/about" element={<Sobre />}/>
                <Route path="/productos" element={<Productos />}/>
                <Route path="/producto/:id" element={<Producto />}/>
                <Route path="/contacto" element={<Contacto />}/>
                <Route path="/cart" element={<Carrito />}/>
                </Route>
              </Routes>
            </BrowserRouter>
          </carritoContext.Provider>
        </showModalContext.Provider>
      </productosContext.Provider>
  );
}

const Layout = () => {
  return (
    <React.Fragment>
    <header><Navbar /></header>
    <Outlet />
    <footer><Footer /></footer>
    </React.Fragment>
  )
}

export default App;
