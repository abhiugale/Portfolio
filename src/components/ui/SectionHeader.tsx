import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ tag, title, subtitle, center = false }) => {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="section-tag font-mono text-primary-400 text-sm tracking-wider uppercase">
        {tag}
      </span>
      <h2
        className={`font-display font-bold mt-2 leading-tight ${
          center ? 'mx-auto' : ''
        }`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base text-white/55 leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
