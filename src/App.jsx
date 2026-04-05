import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Pages from './Components/Pages';
import Portfolio from './Components/Portfolio';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Pages></Pages>
      <Portfolio></Portfolio>
    </>
  );
};

export default App;