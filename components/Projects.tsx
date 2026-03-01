'use client'

import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import Image from 'next/image'
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Bhimagold E-commerce Platform',
      description: 'A full-featured jewelry e-commerce platform with real-time inventory management, dynamic gold pricing, and secure payment gateway integration.',
      image: '/images/bhimagold.png',
      tags: ['Next.js', 'React', 'Redux', 'Tailwind','Razorpay','Cashfree'],
      category: 'E-commerce',
      github: '#',
      live: 'https://bhimagold.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Asterlab Online Medicale testing Platform',
      description: 'Scalable SaaS application serving 35+ business clients with customizable themes, RBAC, and advanced analytics dashboard.',
      image: '/images/asterlab.png',
      tags: ['React','Next js' ,'TypeScript', 'Redux Toolkit', 'Material UI','Razorpay'],
      category: 'E-commerce',
      github: '#',
      live: 'https://www.asterlabs.in/',
      featured: true,
    },
     {
      id:3,
      title: 'Discovery Village',
      description: 'A SaaS tool that helps developers create stunning portfolio websites with customizable templates and one-click deployment.',
      image: '/images/discovery-village.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn UI'],
      category: 'Web App',
      github: '#',
      live: 'https://www.discoveryvillage.in/',
      featured: false,
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/images/bhima-admin.png',
      tags: ['Next.js', 'React js', 'Tailwind css', 'Framer Motion','D3.js'],
      category: 'Dashboard',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website Generator',
      description: 'A SaaS tool that helps developers create stunning portfolio websites with customizable templates and one-click deployment.',
      image: '/images/portfolio.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind','Framer Motion' ,'Vercel'],
      category: 'Web App',
      github: '#',
      live: 'https://portfolio-gen.com',
      featured: false,
    },
  
    {
      id:6,
      title: 'Inventory Management Dashboard',
      description: 'Comprehensive dashboard for multi-warehouse inventory tracking with real-time updates, advanced filtering, and data visualization.',
      image: '/images/inventory.jpeg',
      tags: ['React', 'TypeScript', 'Context API', 'Chart.js'],
      category: 'Dashboard',
      github: '#',
      live: '#',
      featured: true,
    },
  ]

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-dark/50">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my expertise in building modern web applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-gray-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'glass glass-hover text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  // width={600}
                  // height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/10">
                  {project.title.charAt(0)}
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    FEATURED
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-darker via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Sharanspujari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-full font-semibold hover:scale-105 transition-all"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
