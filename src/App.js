import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  const [carrito, setCarrito] = useState([
    {
      cant: 2,
      prop: {
        brand: "Samsung",
        category: "smartphones",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        discountPercentage: 15.46,
        id: 3,
        images: ['https://dummyjson.com/image/i/products/3/1.jpg'],
        price: 1249,
        rating: 4.09,
        stock: 36,
        thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
        title: "Samsung Universe 9"
      }
    },
    {
      cant: 1,
      prop: {
        brand: "Apple",
        category: "smartphones",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        discountPercentage: 17.94,
        id: 2,
        images: 'https://dummyjson.com/image/i/products/2/1.jpg',
        price: 899,
        rating: 4.44,
        stock: 34,
        thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
        title: "iPhone X"
      }
    }
  ])

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
        <showModalContext.Provider value={{ showModal, setShowModal }}>
          <carritoContext.Provider value={{ carrito, setCarrito }}>
            <BrowserRouter>
              <Routes>
                <Route index path="/home" element={<Home />}/>
                <Route path="/about" element={<Sobre />}/>
                <Route path="/productos" element={<Productos />}/>
                <Route path="/producto/:id" element={<Producto />}/>
                <Route path="/contacto" element={<Contacto />}/>
                <Route path="/cart" element={<Carrito />}/>
              </Routes>
            </BrowserRouter>
          </carritoContext.Provider>
        </showModalContext.Provider>
      </productosContext.Provider>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
