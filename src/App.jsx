import { useState } from 'react'
import Sidenav from "./components/Sidenav";
import Main from "./components/Main"
import Projects from './components/Projects';
import About from './components/About';


function App() {

  return (
    <>
      <Sidenav />
      <Main />
      <Projects />
      <About />
    </>
  )
}

export default App
