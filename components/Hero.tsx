'use client'

import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isLoadingResume, setIsLoadingResume] = useState(false)
  const [resumeError, setResumeError] = useState('')

  // Simplified socialLinks without email href
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sharanspujari', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sharanappa-pujari-9a2892258', label: 'LinkedIn' },
    { icon: Mail, label: 'Email' }, // No href for email - will use button handler instead
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Single email handler function
//   const handleEmailClick = (email: string) => {
//   const a = document.createElement('a')
//   a.href = `mailto:${email}?subject=Hello%20Sharanappa&body=Hi%20Sharanappa%2C%0A%0AI%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards`
//   a.click()
// }
  const handleDownloadResume = async () => {
    try {
      setIsLoadingResume(true)
      setResumeError('')

      const response = await fetch('/sharanp_cv.pdf')

      if (!response.ok) throw new Error('Failed to download')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Sharanappa_Pujari_Resume.pdf'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)

    } catch (err) {
      console.error('Download error:', err)
      setResumeError('Failed to download resume')
      setTimeout(() => setResumeError(''), 3000)
    } finally {
      setIsLoadingResume(false)
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 glass rounded-full text-primary text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          Sharanappa <span className="text-gradient">Pujari</span>
        </h1>

        {/* Title */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            Frontend <span className="text-primary font-semibold">Next.js</span> Developer
          </h2>
        </div>

        {/* Summary */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Passionate about building exceptional digital experiences. Specialized in React.js, Next.js, and TypeScript ,Redux toolkit
          with 3+ years of crafting high-performance, scalable web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Download Resume Button */}
          <button
            onClick={handleDownloadResume}
            disabled={isLoadingResume}
            className={`px-8 py-4 glass glass-hover rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-all ${
              isLoadingResume ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoadingResume ? (
              <>
                <span className="animate-spin">⏳</span>
                Downloading...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download Resume
              </>
            )}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 rounded-full font-semibold transition-all hover:scale-105"
          >
            Contact Me
          </button>
        </div>

        {/* Error Message */}
        {resumeError && (
          <div className="mb-6 animate-slide-up">
            <p className="text-red-500 text-sm">{resumeError}</p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {socialLinks.map((social) => {
  if (social.label === 'Email') {
  return (
    <a
      key={social.label}
      href="https://mail.google.com/mail/?view=cm&to=sharanspujari142@gmail.com&su=Hello%20Sharanappa&body=Hi%20Sharanappa%2C%0A%0AI%20would%20like%20to%20connect%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 glass glass-hover rounded-full hover:scale-110 transition-all group cursor-pointer"
      aria-label={social.label}
      title="Click to send email"
    >
      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
    </a>
  )
}

            // Regular links for GitHub and LinkedIn
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass glass-hover rounded-full hover:scale-110 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            )
          })}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}