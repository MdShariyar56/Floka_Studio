import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Pages from './Components/Pages';
import Portfolio from './Components/Portfolio';
import Expertise from './Components/expertise';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Pages></Pages>
      <Portfolio></Portfolio>
      <Expertise></Expertise>
    </>
  );
};

export default App;