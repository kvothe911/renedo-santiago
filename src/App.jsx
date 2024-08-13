import Sidenav from "./components/Sidenav";
import Main from "./components/Main"
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimationProvider } from './components/AnimationContext';


function App() {

  return (
    <AnimationProvider>
      <Sidenav />
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </AnimationProvider>
  )
}

export default App
