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
              main:'#ffffff',
              white: '#ffffff',
              navWhite: '#ffffff',
              semiWhite: '#f3f3f9',
              gray: '#5f5b59',
              semiGray: '#747684'
            },
            secondary: {
              main:'#3577f1',
              blue: '#3577f1',
              semiBlue: '#405189',
              lightBlue: '#eaf1fe'
            },
            success: {
              light: '#dbecf0',
              main:'#22baa5'
            },
            text: {
              dark: '#49505f',
              black: '#495057',
              grey: '#8e8f9c',
              green: '#22baa5',
              red: '#f07187',
              semiBlue: '#8f9ed0',
              white: '#ffffff',
              semiWhite: '#ccd0df'
            }
          }
        : {
            // palette values for dark mode
            primary: {
              main:'#212529',
              white: '#212529',
              navWhite: '#292e32',
              semiWhite: '#1a1d21',
              gray: '#c8d4da',
              semiGray: '#747684'
            },
             secondary: {
              main:'#3577f1',
              blue: '#3577f1',
              semiBlue: '#212529',
              lightBlue: '#232d3e'
            },
            text: {
              dark: '#ced4da',
              black: '#abb1b7',
              grey: '#8e8f9c',
              green: '#22baa5',
              red: '#f07187',
              semiBlue: '#5a5e67',
              white: '#ffffff',
              semiWhite: '#ccd0df'
            }
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