import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative w-full min-h-screen transition-colors duration-300">
          <ParticleBackground />
          <Navbar />
          <div className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
