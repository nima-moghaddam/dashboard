import { createTheme } from '@mui/material';

export const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        primary: {
            // bg, card, main ....
            light: '#ffffff',
            main: '#f3f3f9',
            dark: '#5f5b59',
            semiDark: '#747684'
        },
        secondary: {
            // sidebar, btn ....
            main: '#405189',
            text: '#8f9bc2',
            blueish: '#3577f1',
            opaque: '#eaf1fe'
            
        },
        success: {
            // btn, btn+hover ....
            light: '#dbecf0',
            main:'#22baa5'
        }
    },
    typography: { // will be added later!
        fontFamily: [
            'Poppins', 'sans-serif'
        ]
    }
})
