import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data';
import type { Project } from '@/types';
import SectionHeader from '@/components/ui/SectionHeader';
import GlowOrb from '@/components/ui/GlowOrb';

const categoryLabels: Record<Project['category'], string> = {
  fullstack: 'Fullstack',
  frontend: 'Frontend',
  mobile: 'Mobile',
  backend: 'Backend',
};

const categoryColors: Record<Project['category'], string> = {
  fullstack: 'from-primary-500/20 to-accent/10 border-primary-500/20 text-primary-300',
  frontend: 'from-cyan-500/20 to-primary-500/10 border-cyan-500/20 text-cyan-300',
  mobile: 'from-accent/20 to-primary-500/10 border-accent/20 text-accent',
  backend: 'from-green-500/20 to-primary-500/10 border-green-500/20 text-green-300',
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => setImgIndex((i) => (i + 1) % project.imgSrcs.length);
  const prevImg = () => setImgIndex((i) => (i - 1 + project.imgSrcs.length) % project.imgSrcs.length);

  const handleDemo = () => {
    if (!project.liveDemoLink) {
      alert('Live demo not available for this project.');
    } else {
      window.open(project.liveDemoLink, '_blank');
    }
  };

  const handleGithub = () => {
    if (!project.githubLink) {
      alert('This project is not on GitHub.');
    } else {
      window.open(project.githubLink, '_blank');
    }
  };

  return (
    <motion.article
      className="glass-card overflow-hidden group flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image carousel */}
      <div className="relative h-48 overflow-hidden bg-dark-300 shrink-0">
        <AnimatePresence mode="wait">
          {project.imgSrcs.length > 0 ? (
            <motion.img
              key={imgIndex}
              src={project.imgSrcs[imgIndex]}
              alt={`${project.title} screenshot ${imgIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/111119/6c63ff?text=${encodeURIComponent(project.title)}`;
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
              No preview available
            </div>
          )}
        </AnimatePresence>

        {/* Image nav arrows (only if multiple) */}
        {project.imgSrcs.length > 1 && (
          <>
            <button
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60
                         backdrop-blur-sm flex items-center justify-center text-white/70  
                         hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60
                         backdrop-blur-sm flex items-center justify-center text-white/70
                         hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {project.imgSrcs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Category badge */}
        <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold
                         bg-gradient-to-r border backdrop-blur-md ${categoryColors[project.category]}`}>
          {categoryLabels[project.category]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-base text-white mb-2 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs bg-primary-500/10 text-primary-300 border border-primary-500/15"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 mt-auto border-t border-white/5">
          <button
            onClick={handleDemo}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold
                       text-white/60 hover:text-white border border-white/8 hover:border-primary-500/40
                       hover:bg-primary-500/10 transition-all duration-300"
            id={`project-demo-${project.id}`}
          >
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </button>
          <button
            onClick={handleGithub}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold
                       text-white/60 hover:text-white border border-white/8 hover:border-accent/40
                       hover:bg-accent/10 transition-all duration-300"
            id={`project-github-${project.id}`}
          >
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  const categories: Array<{ key: 'all' | Project['category']; label: string }> = [
    { key: 'all', label: 'All' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'frontend', label: 'Frontend' },
  ];

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="relative py-28 overflow-hidden">
      <GlowOrb color="primary" size={500} opacity={0.07} className="-right-32 top-1/4" />

      <div className="section-container">
        <SectionHeader
          tag="MY WORK"
          title="Featured Projects"
          subtitle="A curated collection of projects that showcase my passion for building elegant, functional digital experiences."
        />

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${filter === cat.key
                  ? 'bg-primary-500 text-white shadow-glow-primary'
                  : 'bg-white/5 text-white/55 hover:text-white hover:bg-white/8 border border-white/8'
                }`}
              id={`filter-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
