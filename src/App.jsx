import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Pages from './Components/Pages';
import Portfolio from './Components/Portfolio';
import Expertise from './Components/expertise';
import Funfacts from './Components/Funfacts';
import CaseThemes from './Components/CaseThemes';
import UserFeedbacks from './Components/UserFeedbacks';
import ContactSection from './Components/ContactSection';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Pages></Pages>
      <Portfolio></Portfolio>
      <Expertise></Expertise>
      <Funfacts></Funfacts>
      <CaseThemes></CaseThemes>
      <UserFeedbacks></UserFeedbacks>
      <ContactSection></ContactSection>
    </>
  );
};

export default App;