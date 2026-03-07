import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/data';
import SectionHeader from '@/components/ui/SectionHeader';
import GlowOrb from '@/components/ui/GlowOrb';

const stats = [
  { value: '6+', label: 'Projects Built' },
  { value: '3m+', label: 'Experience' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '∞', label: 'Curiosity' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <GlowOrb color="accent" size={450} opacity={0.06} className="-left-24 top-1/3" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text content */}
          <div>
            <SectionHeader
              tag="ABOUT ME"
              title="Who I Am"
              subtitle=""
            />

            <motion.div
              className="space-y-5 text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I'm a <span className="text-white font-medium">Software Development Engineer & Tech Lead</span> based in{' '}
                <span className="text-primary-400 font-medium">Pune, India</span>. I specialize in building scalable,
                multi-tenant ecosystems and high-performance digital products across web and mobile platforms.
              </p>

              <p>
                Currently pursuing my <span className="text-white font-medium">Master of Computer Applications (MCA)</span>,
                I bridge the gap between academic theory and enterprise-level engineering. At <strong>Nexoraa Technosolve</strong>,
                I lead a team of developers in architecting complex systems—ranging from real-time WebSocket-based
                chatbots to hierarchical mobile applications with tiered access for SuperAdmins and Tenants.
              </p>

              <p>
                My technical philosophy centers on <strong>clean architecture</strong> and <strong>system scalability</strong>.
                I thrive on solving the intricate challenges of the MERN stack and Flutter, ensuring that every line of code
                contributes to a seamless, maintainable user experience.
              </p>

              <p>
                When I’m not mentoring junior developers or diving into advanced React patterns, you’ll find me on
                the cricket field, exploring new destinations, or unwinding with some lo-fi music.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="gradient-text font-display font-black text-2xl mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Experience timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-tag font-mono text-primary-400 text-sm tracking-wider uppercase mb-6 block">
                EXPERIENCE
              </span>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/50 via-accent/30 to-transparent" />

                <div className="space-y-8 pl-12">
                  {EXPERIENCES.map((exp, i) => (
                    <motion.div
                      key={exp.id}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                    >
                      {/* Dot */}
                      <div className="absolute -left-9 top-1 w-2.5 h-2.5 rounded-full bg-primary-500 shadow-glow-primary" />

                      {/* Card */}
                      <div className="glass-card p-5">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-display font-bold text-white text-base">{exp.role}</h4>
                            <p className="text-primary-400 text-sm font-medium mt-0.5">{exp.company}</p>
                          </div>
                          <span className="text-xs font-mono text-white/35 bg-white/5 px-3 py-1 rounded-full border border-white/8 shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {exp.description.map((point, pi) => (
                            <li key={pi} className="flex items-start gap-2 text-white/55 text-sm">
                              <span className="text-primary-500 mt-1 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                              </span>
                              {point}
                            </li>
                          ))}
                        </ul>
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-1.5 mt-4">
                            {exp.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-0.5 rounded-md text-xs bg-primary-500/10 text-primary-300 border border-primary-500/15">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
