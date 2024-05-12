import { Box, Button, Container, Divider, Drawer, IconButton, Paper } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { boxDivider, btnNavigation, containerNavigation } from "./styles";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    
    window?: () => Window;
}

const drawerWidth = 240;

export function Navigation(props: Props) {
    const idss = useParams();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    

    const drawer = (
        <>
            <Divider sx={{ overflow:"hidden"}}/>

            <Box sx={{...boxDivider, width: drawerWidth,}}>
                <Button sx={btnNavigation} to='/' component={NavLink}>
                    Home
                </Button>

                <Button sx={btnNavigation} to={`/edit/new`} className={idss.id !== undefined ? 'active' : ''} component={NavLink} >
                    Edit
                </Button>
            </Box>

            <Divider />
        </>


    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Paper sx={{
                
            }}>
                <Container sx={{
                    ...containerNavigation,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml:0, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onTransitionEnd={handleDrawerTransitionEnd}
                        onClose={handleDrawerClose}
                        ModalProps={{
                            keepMounted: true, 
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box',},
                        }}
                    >
                        {drawer}
                    </Drawer>

                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>

                   
                </Container>


            </Paper>


        </>

    )
}