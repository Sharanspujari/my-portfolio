'use client'

import { Code, Zap, Trophy, Users } from 'lucide-react'
import Image from 'next/image'
export default function About() {
  const achievements = [
    { icon: Code, value: '25+', label: 'Projects Completed' },
    { icon: Zap, value: '3+', label: 'Years Experience' },
    { icon: Trophy, value: '20%', label: 'Performance Boost' },
    { icon: Users, value: '95%', label: 'Client Satisfaction' },
  ]
console.log("auto deployee test")
  return (
    <section id="about" className="section-padding bg-dark/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Avatar */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl glass overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold text-gradient"><Image style={{objectFit:'cover',marginTop:'7.5rem'}} src={"/images/myphoto.jpeg"} alt="Sharan Pujari" width={425} height={425} /></div>
                </div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Hi, I'm <span className="text-primary">Sharanappa</span>
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                A passionate <span className="text-primary font-semibold">Frontend Developer</span> with 
                over 3+ years of experience building modern, responsive web applications. I specialize in 
                creating seamless user experiences using cutting-edge technologies.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My expertise lies in <span className="text-primary">React.js</span>, <span className="text-primary">Next.js</span>, 
                and <span className="text-primary">TypeScript</span>, where I transform complex requirements 
                into elegant, performant solutions. I'm committed to writing clean, maintainable code and 
                staying current with the latest web development trends.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Currently working at <span className="font-semibold text-white">Codewave Technology</span>, 
                I've successfully delivered 10+ production applications, consistently improving performance 
                by 20% and maintaining a 95% client satisfaction rate.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-3 text-primary">My Passion</h4>
                <p className="text-gray-300 leading-relaxed">
                  I'm driven by the challenge of solving complex problems and creating digital experiences 
                  that make a difference. Whether it's optimizing performance, implementing new features, 
                  or mentoring team members, I bring dedication and enthusiasm to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-6 text-center group hover:scale-105 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 glass rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2 text-gradient">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
