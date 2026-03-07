import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/muiTheme';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-dark antialiased">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
