import { Alert, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { listItem, mainListBox } from "./style";
import { DeleteNote } from "./DeleteNote";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { resetError } from "../../redux/slices/mainNotesSlice";


export function Home() {
    const dispatch = useAppDispatch()
    const noteList = useAppSelector(state => state.note)


    useEffect(() => {
        if (noteList.error) {
            setTimeout(() => {
                dispatch(resetError());
            }, 2500); 
        }
    }, [noteList.error]);

    return (
        <List sx={mainListBox}>
            {noteList.notes.map(el => (
                <ListItem key={el.id} alignItems="flex-start" sx={listItem}>
                    <ListItemText
                        sx={{ flexGrow: '1' }}
                        primary={
                            <Typography
                                to={`/edit/${el.id}`}
                                sx={{ width: 'fit-content', display: 'block' }}
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
                    <ListItemButton sx={{ flexGrow: '0', p: '0', minWidth:'34px' }}>
                        <DeleteNote id={el.id}></DeleteNote>
                    </ListItemButton>
                </ListItem>


            ))}

            {noteList.error ?
                <Alert variant="filled" severity="error" sx={{position:'absolute', top:'10px', right:'50%'}}>
                    Oops! Deletion error
                </Alert>
                :
                <></>
            }
        </List>
    )
}