import React from 'react';
import Preloader from './components/preloader'
import Navbar from './components/navbar'
import Slider from './components/slider'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import Back from './components/back'
import './App.css';

function App() {
  return (
    <div>
      {/*====== PRELOADER PART START ======*/}
      <Preloader></Preloader>
      {/*====== PRELOADER PART ENDS ======*/}
      {/*====== NAVBAR TWO PART START ======*/}
      <Navbar></Navbar>
      {/*====== NAVBAR TWO PART ENDS ======*/}
      {/*====== SLIDER PART START ======*/}
      <Slider></Slider>
      {/*====== SLIDER PART ENDS ======*/}
      {/* ====== ABOUT PART START ======*/}
      <About></About>
      {/*====== ABOUT PART ENDS ======*/}
      {/*====== EXPERIENCE PART START ======*/}
      <Experience></Experience>
      {/*====== EXPERIENCE PART ENDS ======*/}
      {/*====== PROJECTS PART START ======*/}
      <Projects></Projects>
      {/*====== PROJECTS PART ENDS ======*/}
      {/*====== CONTACT PART START ======*/}
      <Contact></Contact>
      {/*====== CONTACT PART ENDS ======*/}
      {/*====== FOOTER PART START ======*/}
      <Footer></Footer>
      {/*====== FOOTER PART ENDS ======*/}
      {/*====== BACK TO TOP PART START ======*/}
      <Back></Back>
      {/*====== BACK TO TOP PART ENDS ====== */}
    </div>
  );
}

export default App;
