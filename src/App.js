import React, { useEffect, useState } from 'react'
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import CustomCarousel from './components/CustomCarousel';
import productosContext from './contexts/productosContext.js';

export const productsContext = React.createContext();

function App() {
  const [productos, setProductos] = useState()

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(res => {
      setProductos(res.products)
      console.log(res.products)
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <header>
        <CustomNavbar />
      </header>
      <productosContext.Provider value={{ productos, setProductos }}>
        { productos ?
          <section>
            <CustomCarousel />
          </section>
        :
          null
        }
      </productosContext.Provider>
    </div>
  );
}

export default App;
