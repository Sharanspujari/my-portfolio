'use client'

import { useState } from 'react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  const skillCategories = {
    Frontend: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 93 },
      { name: 'TypeScript', level: 88 },
    ],
    UI: [
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 93 },
      { name: 'Material UI', level: 85 },
    ],
    'State Management': [
      { name: 'Redux Toolkit', level: 90 },
      { name: 'Context API', level: 92 },
      { name: 'Zustand', level: 80 },
      { name: 'React Query', level: 85 },
    ],
    Tools: [
      { name: 'Git & GitHub', level: 93 },
      { name: 'Webpack', level: 85 },
      { name: 'Vite', level: 88 },
      { name: 'Firebase', level: 80 },
    ],
    'API & Integration': [
      { name: 'REST APIs', level: 93 },
      { name: 'GraphQL', level: 80 },
      { name: 'Axios', level: 95 },
      { name: 'WebSockets', level: 78 },
    ],
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional web experiences
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'glass glass-hover text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div
                key={skill.name}
                className="glass glass-hover rounded-xl p-6 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design',
              'Performance Optimization',
              'Code Splitting',
              'SSR & SSG',
              'SEO',
              'Agile/Scrum',
              'CI/CD',
              'Testing (Jest)',
              'Cross-browser Testing',
              'Accessibility (a11y)',
              'Chrome DevTools',
              'Figma to Code',
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 glass glass-hover rounded-full text-sm font-medium hover:scale-105 transition-all hover:text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
