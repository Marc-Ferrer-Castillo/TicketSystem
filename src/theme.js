// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            color: '#ffffff', // Color del texto
          },
          '& .MuiInputLabel-root': {
            color: '#ffffff', // Color de la etiqueta
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ffffff', // Color del borde
            },
            '&:hover fieldset': {
              borderColor: '#1e88e5', // Color del borde al pasar el mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1e88e5', // Color del borde al estar enfocado
            },
          },
        },
      },
    },
  },
});

export default theme;
