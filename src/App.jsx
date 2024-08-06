import { useState } from 'react'
import Sidenav from "./components/Sidenav";
import Main from "./components/Main"
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
