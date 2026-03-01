'use client'

import { useState } from 'react'
import { Mail, Send, Github, Linkedin, MapPin, Phone, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sharanspujari142@gmail.com',
      href: 'mailto:sharanspujari142@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9916599003',
      href: 'tel:+919916599003',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: 'https://maps.google.com/?q=Bengaluru',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Sharanspujari',
      username: '@Sharanspujari',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sharanappa-pujari-9a2892258',
      username: 'Sharanappa Pujari',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-dark/50">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="md:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                if (info.label === 'Email') {
                  return (
                    <a
                      key={info.label}
                      href="https://mail.google.com/mail/?view=cm&to=sharanspujari142@gmail.com&su=Hello%20Sharanappa&body=Hi%20Sharanappa%2C%0A%0AI%20would%20like%20to%20connect%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass glass-hover rounded-xl p-6 flex items-start gap-4 group"
                    >
                      <div className="p-3 glass rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.label}</h3>
                        <p className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  )
                }
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover rounded-xl p-6 flex items-start gap-4 group"
                  >
                    <div className="p-3 glass rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <p className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 glass glass-hover rounded-lg group"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </div>
                      <div className="text-xs text-gray-400">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass rounded-xl p-6 text-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
              <h3 className="font-semibold mb-2">Available for Work</h3>
              <p className="text-sm text-gray-400">
                Open to full-time opportunities and freelance projects
              </p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {/* Success Message */}
              {isSubmitted && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-3 animate-scale-in">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-500 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              <p className="text-sm text-gray-400 text-center">
                I typically respond within 24-48 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
