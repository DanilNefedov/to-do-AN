import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
// import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { listItem, mainListBox } from "./style";
import { DeleteNote } from "./DeleteNote";
import { NavLink } from "react-router-dom";


export function Home() {
    // const id = uuidv4()
    // const dispatch = useAppDispatch()
    const noteList = useAppSelector(state => state.note)

    console.log(noteList)

    return (
        <List sx={mainListBox}>
            {noteList.notes.map(el => (
                <ListItem key={el.id} alignItems="flex-start" sx={listItem}>
                    <ListItemText
                        sx={{flexGrow:'1'}}
                        primary={
                        <Typography
                            to={`/edit/${el.id}`}
                            sx={{width:'fit-content', display:'block'}}
                            component={NavLink}
                            color="text.primary"
                        >
                            {el.note_header}
                        </Typography>}
                        secondary={
                            <Typography
                                sx={{ display: 'inline', color: 'text.secondary' }}
                                component="p"
                                variant="body2"
                                color="text.primary"
                            >
                                {el.note_body}
                            </Typography>
                        }
                    >
                    </ListItemText>
                    <ListItemButton sx={{flexGrow:'0', p:'0'}}>
                        <DeleteNote id={el.id}></DeleteNote>
                    </ListItemButton>
                </ListItem>


            ))}

        </List>
    )
}