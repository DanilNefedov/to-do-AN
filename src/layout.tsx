import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigation } from "./component/navigation/Navigation";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";



export function Layout() {
  
    return (
        <Box sx={{ backgroundColor: 'background.paper', height:'100vh', display:'flex'}}>
            <Navigation ></Navigation>
            <Outlet></Outlet>
        </Box>

    )
}