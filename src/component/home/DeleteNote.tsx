import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBtn } from "./style";
import { useAppDispatch } from "../../redux/hook";
import { deleteNotesFetch } from "../../redux/slices/mainNotesSlice";


export function DeleteNote({id}:{id:string}) {
    const dispatch = useAppDispatch()


    async function deleteNote(){
        if(id !== ''){
            dispatch(deleteNotesFetch(id))
        }
    }


    return (
        <Tooltip title="Delete" sx={deleteBtn} onClick={() => deleteNote()}>
            <IconButton >
                <DeleteIcon sx={{color:"secondary.dark",}}/>
            </IconButton>
        </Tooltip>
    )
}