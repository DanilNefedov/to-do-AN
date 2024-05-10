import { createTheme, outlinedInputClasses } from '@mui/material';


// Augment the palette to include an ochre color
declare module '@mui/material/styles' {
    interface Palette {
        ochre: Palette['primary'];
        // greyBtn: Palette['primary'];
    }

    interface PaletteOptions {
        ochre?: PaletteOptions['primary'];
        // greyBtn?: PaletteOptions['primary'];
    }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ochre: true;
    }
}






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
            // light: "#ffc2b3",
            contrastText: '#FBFBFB',
            // dark: '#A5514F',
        },
        // greyBtn:{
        //   main:'#fff',
        //   light:'#B24F49',
        //   dark:'#1F2128',
        //   contrastText:'#fff'
        // },
        // ochre: {
        //     main: '#1F2128',
        //     light: '#E9DB5D',
        //     dark: '#A29415',
        //     contrastText: '#8E94A4',
        // },
    },

   
    shape: {
        borderRadius: 20,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,

        },
    },
    components: {


        // MuiContainer: {
        //     styleOverrides: {
        //         root: {
        //             maxWidth: '1500px',

        //         },
        //     },

        // },
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
        // MuiCssBaseline: {
        //     styleOverrides: {
        //         body: {
        //             scrollbarColor: "#1F2128 #353842",
        //             "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        //                 backgroundColor: "#353842",
        //                 borderRadius: '10px'
        //             },
        //             "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        //                 borderRadius: 8,
        //                 backgroundColor: "#1F2128",
        //                 minHeight: 24,
        //                 border: "3px solid #353842",
        //             },
        //             "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
        //                 backgroundColor: "#959595",
        //             },
        //             "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
        //                 backgroundColor: "#959595",
        //             },
        //             "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
        //                 backgroundColor: "#959595",
        //             },
        //             "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
        //                 backgroundColor: "#353842",
        //             },

        //         },
        //     },
        // },

        // MuiPaper: {
        //   styleOverrides: {
        //     root: {
        //       '&.MuiMenu-paper': {
        //         backgroundColor: '#1F2128',
        //       }
        //     }
        //   },
        // },


    },

    // typography:{
    //   fontSize:'18p'
    // }
});