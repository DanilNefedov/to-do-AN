import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MainNote, NoteMainSlice } from "../types-redux";
import notes from "../../api/notes";
import { initializeState } from "./editNotesSLice";


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
                return rejectWithValue('Server Error!');
            }
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue('An unexpected error occurred.');
        }
    }
);


export const deleteNotesFetch = createAsyncThunk<string, string, { rejectValue: string }>(
    'notes/deleteNotesFetch',
    async function (id, { rejectWithValue }) {
        try {   
            const response = await notes.delete(`/notes/${id}`);
            
            if (response.status !== 200) {
                return rejectWithValue('Server Error!');
            }
            console.log(response.data, response, id)
            return id;
            
        } catch (error) {
            console.error(error);
            return rejectWithValue('An unexpected error occurred.');
        }
    }
);


export const newNoteFetch = createAsyncThunk<MainNote, MainNote, { rejectValue: string }>(
    'notes/newNoteFetch',
    async function (data, { rejectWithValue, dispatch }) {
        try {   
            
            const response = await notes.post('/notes',
                data
            );
            // console.log(response.status)
            if (response.status !== 201) {
                return rejectWithValue('Server Error!');
            }
            // console.log(response.data, response, data)
            // dispatch(initializeState())
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
                    const thisNote = state.notes.find(elem => elem.id === el.id)
                    if (!thisNote) {
                        const { id, note_body, note_header } = el
                        return state.notes.unshift({ id, note_header, note_body })
                    }

                })
            })
            .addCase(fetchNotes.rejected, (state) => {
                state.status = false;
                state.error = true;
            })



            .addCase(deleteNotesFetch.pending, (state) => {
                state.status = true;
                state.error = false;
            })
            .addCase(deleteNotesFetch.fulfilled, (state, action: PayloadAction<string, string>) => {
                state.status = false;
                state.error = false;

                const idToDelete = action.payload;
                state.notes = state.notes.filter(note => note.id !== idToDelete);
            })
            .addCase(deleteNotesFetch.rejected, (state) => {
                state.status = false;
                state.error = true;
            })
    }
});

export default noteSlice.reducer;
