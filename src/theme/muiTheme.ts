import { createTheme, type ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#6c63ff',
      light: '#9b95ff',
      dark: '#4a43cc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff6584',
      light: '#ff8fa3',
      dark: '#cc3d5f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a0a0f',
      paper: 'rgba(255,255,255,0.04)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.65)',
    },
    divider: 'rgba(255,255,255,0.08)',
    error: { main: '#ff5370' },
    success: { main: '#55f498' },
    info: { main: '#00f5ff' },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", sans-serif',
    h1: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Outfit", "Inter", sans-serif',
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.65,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
    overline: {
      fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#6c63ff #0a0a0f',
          '&::-webkit-scrollbar': { width: 6 },
          '&::-webkit-scrollbar-track': { background: '#0a0a0f' },
          '&::-webkit-scrollbar-thumb': {
            background: 'linear-gradient(#6c63ff, #ff6584)',
            borderRadius: 3,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
          boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7d75ff, #ff7a96)',
            boxShadow: '0 10px 40px rgba(108, 99, 255, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.85)',
          '&:hover': {
            borderColor: 'rgba(108, 99, 255, 0.6)',
            background: 'rgba(108, 99, 255, 0.1)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255,255,255,0.07)',
            borderColor: 'rgba(108, 99, 255, 0.3)',
            boxShadow: '0 25px 50px rgba(108, 99, 255, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        filled: {
          background: 'rgba(108, 99, 255, 0.15)',
          color: '#9b95ff',
          '&:hover': {
            background: 'rgba(108, 99, 255, 0.25)',
          },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.12)',
          '&:hover': {
            borderColor: 'rgba(108, 99, 255, 0.5)',
            background: 'rgba(108, 99, 255, 0.08)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 12,
            '& fieldset': {
              borderColor: 'rgba(255,255,255,0.1)',
              transition: 'border-color 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(108, 99, 255, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6c63ff',
              borderWidth: 1.5,
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255,255,255,0.45)',
            '&.Mui-focused': {
              color: '#9b95ff',
            },
          },
          '& .MuiInputBase-input': {
            color: 'rgba(255,255,255,0.9)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.06)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: 'rgba(20,20,36,0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8,
          fontSize: 12,
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
