import './App.css'
import './responsive.css'
import { Controller, Scene } from 'react-scrollmagic'
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
    <Controller>
      <Header />
      <Animate />
      <Scene triggerElement="#home" triggerHook="onEnter" duration={300}>
        {(progress) => (
          <Home />
        )}
      </Scene>
      <Scene triggerElement="#about" triggerHook="onEnter" duration={300}>
        {(progress) => (
          <About />
        )}
      </Scene>
      <Scene triggerElement="#resume" triggerHook="onEnter" duration={300}>
        {(progress) => (
          <Resume />
        )}
      </Scene>
      <Scene triggerElement="#skills" triggerHook="onEnter" duration={300}>
        {(progress) => (
          <Skills />
        )}
      </Scene>
      <Scene triggerElement="#projects" triggerHook="onEnter" duration={300}>
        {(progress) => (
          <Projects />
        )}
      </Scene>
      <Scene triggerElement="#contact" triggerHook="onEnter" duration={300}>
        {(progress) => (
          <Contact />
        )}
      </Scene>
      <Footer />
    </Controller>
  )
}

export default App
