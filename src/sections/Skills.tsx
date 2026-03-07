import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/data';
import type { Skill } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import GlowOrb from '@/components/ui/GlowOrb';

const categoryMeta: Record<Skill['category'], { label: string; gridClass: string; icon: React.ReactNode }> = {
  language: { 
    label: 'Languages', 
    gridClass: 'md:col-span-1 md:row-span-2 min-h-[320px]',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  framework: { 
    label: 'Frameworks & Libraries', 
    gridClass: 'md:col-span-2 md:row-span-1 min-h-[240px]',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  },
  database: { 
    label: 'Databases', 
    gridClass: 'md:col-span-1 md:row-span-1 min-h-[240px]',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  },
  tool: { 
    label: 'Tools & Platform', 
    gridClass: 'md:col-span-1 md:row-span-1 min-h-[240px]',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  },
  cloud: {
    label: 'Cloud & Infrastructure',
    gridClass: 'md:col-span-3 md:row-span-1 min-h-[220px]',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1384 20.1837 10.2016 17.8654 10.0195C17.3888 6.64386 14.2843 4 10.5 4C6.35786 4 3 7.35786 3 11.5C3 11.8797 3.02824 12.2533 3.08272 12.6186C1.30902 13.237 0 14.9455 0 17C0 19.7614 2.23858 22 5 22H17.5Z"/></svg>
  },
};

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(108, 99, 255, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 w-full h-full p-8 flex flex-col">
        {children}
      </div>
    </div>
  );
};

const FloatPill = ({ skill, index }: { skill: Skill; index: number }) => {
  const duration = 3 + (index % 3);
  const yOffset = 4 + (index % 4);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/10 hover:border-white/20 transition-colors"
      animate={{ y: [0, -yOffset, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-sm font-medium text-white/90">{skill.name}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const categories = (['language', 'framework', 'database', 'tool', 'cloud'] as Skill['category'][]);

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <GlowOrb color="cyan" size={400} opacity={0.06} className="right-0 -bottom-20 translate-x-1/4" />
      <GlowOrb color="primary" size={350} opacity={0.06} className="-left-20 bottom-1/4" />

      <div className="section-container relative z-10">
        <SectionHeader
          tag="EXPERTISE"
          title="My Capabilities"
          subtitle="A snapshot of the technologies and tools I work with. I'm always expanding my skillset."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const catSkills = SKILLS.filter((s) => s.category === cat);
            if (!catSkills.length) return null;
            const meta = categoryMeta[cat];

            return (
              <motion.div
                key={cat}
                className={meta.gridClass}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <SpotlightCard className="h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                      {meta.icon}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white tracking-wide">
                      {meta.label}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 content-start flex-1">
                    {catSkills.map((skill, index) => (
                      <FloatPill key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* "Always learning" tagline */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-white/30 text-sm font-mono tracking-widest uppercase">
            always learning · building · improving
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
