import { Box, CircularProgress } from "@mui/material";
import { containerLoader } from "./styles";



export function Loading() {
    return (
        <Box sx={containerLoader}>
            <CircularProgress sx={{color:'#FBFBFB'}}/>
        </Box>
    )
}