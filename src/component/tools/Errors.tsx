import { Box, Typography } from "@mui/material";
import { errorContainer } from "./styles";
import { useRouteError } from "react-router-dom";




export function Errors({props}:{props:string}){
    const error:any = useRouteError();

   

    return(
        <Box sx={errorContainer}>
            <Typography fontSize={40} >
                Oops! I think something's wrong... 
            </Typography>

            <Typography fontSize={18} component='i' sx={{maxWidth:'450px', textAlign:'center', m:'20px 0'}}>
                <i>{error?.statusText || error?.message}</i>
            </Typography>
            

            <Typography fontSize={18} component='span' sx={{maxWidth:'450px', textAlign:'center'}}>
                {props}
            </Typography>
        </Box>
    )
}