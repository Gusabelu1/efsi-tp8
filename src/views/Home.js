import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Productos from '../components/Productos';

function Home() {
  return (
    <>
      <section id='carousel'>
        <CustomCarousel />
      </section>
      <section id='productos'>
        <Productos cantItems={6} />
      </section>
    </>
  );
}

export default Home;
