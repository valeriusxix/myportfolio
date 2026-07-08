import React from 'react';
import NavBar from '../Components/NavBar';
import Home from './Home';
import About from './About';
import PoW from './PoW';
import Contact from './Contact';
import Footer from '../Components/footer';

function LandingPage() {
  return (
    <>
      <NavBar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      {/* Uncomment as you build each section: */}
      <section id="PoW"><PoW /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default LandingPage;