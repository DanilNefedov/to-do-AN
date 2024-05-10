import { Box, CircularProgress } from "@mui/material";



export function Loading() {
    return (
        <Box sx={{ position:'absolute',  zIndex:'1000', top:'0', right:'0', width:'100%', height:'100%'}}>
            <CircularProgress />
        </Box>
    )
}