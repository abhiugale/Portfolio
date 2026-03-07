import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/data';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (y) => setIsScrolled(y > 30));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled
            ? 'rgba(10,10,15,0.85)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="font-display font-bold text-xl tracking-tight flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
            >
              {/* Logo from assets */}
              <img 
                src="/assets/images/my-logo.png" 
                alt="Personal Logo" 
                className="h-24 sm:h-40 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image is missing
                  (e.target as HTMLImageElement).style.display = 'none';
                  document.getElementById('fallback-logo-text')?.classList.remove('hidden');
                }}
              />
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white/65 hover:text-white
                             hover:bg-white/5 transition-all duration-200"
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary ml-4 text-xs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </motion.a>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative z-10 p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <motion.nav
            className="absolute right-0 top-0 h-full w-72 flex flex-col pt-24 pb-8 px-6"
            style={{ background: 'rgba(13,13,20,0.98)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left py-4 text-lg font-medium text-white/70 hover:text-white
                           border-b border-white/5 transition-colors"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 justify-center text-sm"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Download Resume
            </motion.a>
          </motion.nav>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
