import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material';

export const themeContext = createContext({ toggleColorMode:  () => {} });

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');


  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  const theme = createTheme({
    direction: 'rtl',
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
              light: '#ffffff',
              main: '#f3f3f9',
              dark: '#5f5b59',
              semiDark: '#747684'
            },
            secondary: {
              main: '#405189',
              text: '#8f9bc2',
              blueish: '#3577f1',
              opaque: '#eaf1fe'
                
            },
            success: {
              light: '#dbecf0',
              main:'#22baa5'
            }
          }
        : {
            // palette values for dark mode
            primary: {
              light: '#292e32',
              main: '#1a1d21',
              dark: '#ced4da'
            },
            secondary: {
              main: '#212529',
              blueish: '#3577f1',
              opaque: '#eaf1fe'
            },
          }
      ),
    },
    typography: { // will be added later!
      fontFamily: [
          'Poppins', 'sans-serif'
      ]
    } 
  })
    
  

    
  return (
    <themeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </themeContext.Provider>
  );
};