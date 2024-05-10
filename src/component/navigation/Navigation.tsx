import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { btnNavigation, containerNavigation } from "./styles";



export function Navigation() {
    return (
        <Paper >
            <Container sx={containerNavigation}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width:'200px'}}>
                    <Button sx={btnNavigation} to='/' component={NavLink}>
                        Home
                    </Button>

                    <Button sx={btnNavigation} to='/edit' component={NavLink}>
                        Edit
                    </Button>
                </Box>
            </Container>
        </Paper>
    )
}