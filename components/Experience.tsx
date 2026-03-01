'use client'

import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: 'Codewave Technology',
      role: 'Frontend Next.js Developer',
      duration: 'July 2024 - Present',
      location: 'Bengaluru, Karnataka, India',
      type: 'Full-time',
      achievements: [
        'Developed production-grade Next.js 14+ applications with App Router and Server Components, achieving 30% faster page loads',
        'Led code reviews and mentored junior developers, improving team code quality by 25%',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Optimized web performance using React profiling, code splitting, and lazy loading techniques',
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git'],
      current: true,
    },
    {
      company: 'Snaxsmart',
      role: 'Frontend React Developer',
      duration: 'June 2022 - July 2024',
      location: 'Bengaluru, Karnataka, India',
      type: 'Full-time',
      achievements: [
        'Developed a React-based inventory management dashboard with modular, reusable components using React Hooks and Context API, achieving a 15% reduction in codebase size',
        'Reduced page load times by 20% through performance optimization and React profiling',
        'Decreased cross-browser bugs by 18% implementing comprehensive testing strategies',
        'Partnered with UX team to translate Figma designs into pixel-perfect, functional interfaces with 100% design alignment,improving cross-team workflow efficiency by 22%',
        'Implemented state management solutions using Redux Toolkit for complex application states, improving maintainability and developer experience',
      ],
      technologies: ['React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Webpack'],
      current: false,
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey building innovative solutions and delivering exceptional results
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 hidden md:block" />

                  {/* Content Card */}
                  <div className="md:ml-20 glass glass-hover rounded-2xl p-6 md:p-8 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">
                              CURRENT
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-lg font-semibold text-gray-300 mb-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span className="text-primary mt-1.5">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-block glass rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready for New <span className="text-gradient">Opportunities</span>
            </h3>
            <p className="text-gray-400 mb-6">
              I'm always excited to work on challenging projects and collaborate with talented teams. 
              Let's build something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
