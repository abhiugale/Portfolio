import React from 'react';
import { motion } from 'framer-motion';

interface GlowOrbProps {
  color?: 'primary' | 'accent' | 'cyan';
  size?: number;
  opacity?: number;
  className?: string;
}

const colorMap = {
  primary: 'rgba(108,99,255,',
  accent: 'rgba(255,101,132,',
  cyan: 'rgba(0,245,255,',
};

const GlowOrb: React.FC<GlowOrbProps> = ({
  color = 'primary',
  size = 400,
  opacity = 0.15,
  className = '',
}) => {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorMap[color]}${opacity}) 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [opacity * 0.8, opacity, opacity * 0.8],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default GlowOrb;
