import { createTheme } from '@mui/material';

export const theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'light',
        primary: {
            // bg, card, main ....
            light: '#ffffff',
            main: '#f3f3f9',
        },
        secondary: {
            // sidebar, btn ....
            main: '#405189',
        },
        success: {
            // btn, btn+hover ....
            light: '#dbecf0',
            main:'#22baa5'
        }
    },
    typography: {
        fontFamily: [
            'Poppins', 'sans-serif'
        ]
    }
})
