import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { NavLink, matchRoutes, useLocation, useParams } from "react-router-dom";
import { btnNavigation, containerNavigation } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";


export function Navigation() {
    // const {id , newId} = props
    const [id, setId] = useState(uuidv4())
    const idss = useParams();
    
    return (
        <Paper >
            <Container sx={containerNavigation}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width:'200px'}}>
                    <Button sx={btnNavigation} to='/' component={NavLink}>
                        Home
                    </Button>

                    <Button sx={btnNavigation} to={`/edit/new`} className={idss.id !== undefined ? 'active': ''} component={NavLink} onClick={() => setId(uuidv4())}>
                        Edit
                    </Button>
                </Box>
            </Container>
        </Paper>
    )
}