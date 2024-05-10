import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MainNote, NoteMainSlice } from "../types-redux";
import notes from "../../api/notes";


const initialState: NoteMainSlice = {
    status: false,
    error: false,
    notes: [
        // {
        //     id:'',
        //     note_header:'',
        //     note_body:''
        // }
    ]

}


export const fetchNotes = createAsyncThunk<MainNote[], string, { rejectValue: string }>(
    'notes/fetchNotes',
    async function (url, { rejectWithValue }) {
        try {
            const response = await notes.get(url);
            
            if (response.status !== 200) {
                throw new Error('Server Error!');
            }
            
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('An unexpected error occurred.');
        }
    }
);

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {  
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.status = true;
                state.error = false;
            })
            .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<MainNote[], string>) => {
                state.status = false;
                state.error = false;

                action.payload.map(el => {
                    const {id, note_body, note_header} = el
                    return state.notes.unshift({id, note_header, note_body})
                })
            })
            .addCase(fetchNotes.rejected, (state) => {
                state.status = false;
                state.error = true;
            });
    }
});

export default noteSlice.reducer;
