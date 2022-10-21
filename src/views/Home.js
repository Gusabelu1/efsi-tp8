import React, { useContext } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import CustomCarousel from '../components/CustomCarousel';
import Productos from '../components/Productos';
import productosContext from '../contexts/productosContext';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

function App() {
  const { productos } = useContext(productosContext);

  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <section id='carousel'>
        <CustomCarousel />
      </section>
      <section id='productos'>
      <productosContext.Provider value={{ productos }}>
        { productos ?
          <Productos />
        :
          <Loading />
        }
      </productosContext.Provider>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
