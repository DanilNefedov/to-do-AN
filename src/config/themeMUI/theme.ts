import { createTheme } from '@mui/material';






export const theme = createTheme({
    palette: {
        primary: {
            main: '#312EB5',
            light: "#5e6db0",
            contrastText: '#FBFBFB',
            dark: '#4C4AB5',
        },
        secondary: {
            main: '#95B8D1',
            dark: "#666A86",
        },
        text: {
            primary: '#FBFBFB',
            secondary: "#858585",//BDBDBD
            // disabled: '#BCBCBC'
        },
        background: {
            paper: '#181818',
            default: '#232323',
        },
        error: {
            main: '#FF7269',
            light: "#ffc2b3",
            contrastText: '#FBFBFB',
            dark: '#A5514F',
        },
       
        info:{
            main:'#FBFBFB'
        }
    },

   
    shape: {
        borderRadius: 20,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 800,
            md: 900,
            lg: 1200,
            xl: 1536,

        },
    },
    components: {

        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#FBFBFB',
                    fontWeight: 500,
                    fontSize: 16,
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    '&:last-child': {
                        paddingBottom: '9px'
                    }
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
            },
        },
       
    },
});