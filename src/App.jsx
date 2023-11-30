import './App.css'
import './responsive.css'
import About from './components/about'
import Animate from './components/animate'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import Projects from './components/projects'
import Resume from './components/resume'
import Skills from './components/skill'

function App() {

  return (
    <>
      <Header />
      <Animate />
      <Home />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
