import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBtn } from "./style";


export function DeleteNote() {
    return (
        <Tooltip title="Delete" sx={deleteBtn}>
            <IconButton >
                <DeleteIcon sx={{color:"secondary.dark",}}/>
            </IconButton>
        </Tooltip>
    )
}