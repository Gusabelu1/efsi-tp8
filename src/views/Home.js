import React, { useContext } from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Productos from '../components/Productos';
import productosContext from '../contexts/productosContext';

function Home() {
  const { productos } = useContext(productosContext);

  return (
    <>
      <section id='carousel'>
        <CustomCarousel />
      </section>
      <section id='productos'>
      <productosContext.Provider value={{ productos }}>
        <Productos cantItems={6} />
      </productosContext.Provider>
      </section>
    </>
  );
}

export default Home;
