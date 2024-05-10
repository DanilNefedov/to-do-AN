import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigation } from "./component/navigation/Navigation";




export function Layout() {
    return (
        <Box sx={{ backgroundColor: 'background.paper', height:'100vh', display:'flex'}}>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </Box>

    )
}