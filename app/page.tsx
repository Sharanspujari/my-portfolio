'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <BackgroundAnimation />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-dark-darker border-t border-white/5 py-8">
        <div className="container-custom text-center text-gray-400">
          <p>© 2025 Sharanappa Pujari. Built with Next.js 15 & Tailwind CSS</p>
          <p className="text-sm mt-2">Designed & Developed with 💙</p>
        </div>
      </footer>
    </div>
  )
}
