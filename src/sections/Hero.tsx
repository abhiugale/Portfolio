import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { SOCIAL_LINKS } from '@/data';
import GlowOrb from '@/components/ui/GlowOrb';

const socialLinks = [
  {
    href: SOCIAL_LINKS.linkedin,
    label: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: SOCIAL_LINKS.github,
    label: 'GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    href: `mailto:${SOCIAL_LINKS.email}`,
    label: 'Email',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

const InteractiveTerminal = () => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl bg-[#0a0f1c]/80 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col mx-auto lg:ml-auto"
      initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent/20 rounded-3xl -z-10 blur-xl opacity-50"
      />

      {/* Terminal Header */}
      <div 
        className="h-10 border-b border-white/10 flex items-center px-4 gap-2"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="flex-1 text-center font-mono text-[12px] text-white/30 mr-8">
          developer@abhishek:~
        </div>
      </div>

      {/* Terminal Content */}
      <motion.div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="flex-1 p-6 flex flex-col justify-center"
      >
        <div className="font-mono text-sm md:text-base leading-loose drop-shadow-md">
          <div className="text-primary-400">
            const <span className="text-white">Profile</span> <span className="text-accent">=</span> {'{'}
          </div>
          <div className="pl-4 sm:pl-8">
            <span className="text-cyan-400">name:</span> <span className="text-accent/90">'Abhishek Ugale'</span>,
          </div>
          <div className="pl-4 sm:pl-8">
            <span className="text-cyan-400">role:</span> <span className="text-accent/90">'Software Development Engineer'</span>,
          </div>
          <div className="pl-4 sm:pl-8">
            <span className="text-cyan-400">stack:</span> <span className="text-white/80">['React', 'Nest.js', 'Java-Spring Boot', 'Flutter']</span>,
          </div>
          <div className="pl-4 sm:pl-8 flex items-center">
            <span className="text-cyan-400">status:</span> 
            <span className="ml-2 flex items-center gap-2 px-2 py-0.5 rounded-md bg-green-500/10 text-green-400 border border-green-500/20 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to Work
            </span>
          </div>
          <div className="text-primary-400">{'}'};</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Flow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          }}
        />
        <GlowOrb color="primary" size={600} opacity={0.15} className="-top-32 -left-32" />
        <GlowOrb color="accent" size={500} opacity={0.1} className="top-1/4 right-0" />
        <GlowOrb color="cyan" size={400} opacity={0.08} className="bottom-0 left-1/4" />
      </div>

      <div className="section-container relative z-10 pt-32 pb-24 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text and CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full flex-1"
          >
            {/* Tag line */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary-500 to-transparent" />
              <span className="font-mono text-xs sm:text-sm text-primary-400 tracking-widest uppercase">
                Welcome to my universe
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 500 }}
            >
              <div className="text-white">I design & build</div>
              <div>
                <span className="bg-gradient-to-r from-primary-800 via-accent to-primary-800 bg-clip-text text-transparent">
                  digital products.
                </span>
              </div>
            </motion.h1>

            {/* Type animation */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-primary-500 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </span>
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    2000,
                    'Technical Lead',
                    2000,
                    'Software Architect',
                    2000,
                    'Cloud Engineer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-mono font-medium text-sm sm:text-base text-white/80"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg mb-12"
            >
              Hi, I'm <span className="text-white font-medium">Abhishek Ugale</span>. 
              A Software Engineer specializing in scalable infrastructure and highly polished digital experiences.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-contact-btn"
              >
                Let's Connect
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </motion.a>
              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-ghost"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-work-btn"
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 bg-white/5
                               hover:text-primary-400 border border-white/5 hover:border-primary-500/30
                               hover:bg-primary-500/10 transition-all duration-300 shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive Element */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full perspective-1000">
              <InteractiveTerminal />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-white/20 via-white/10 to-transparent"
            animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
