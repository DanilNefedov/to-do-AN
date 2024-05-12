import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EditNotes, MainNote } from "../types-redux";
import notes from "../../api/notes";


const initialState: EditNotes = {
    status: false,
    error: false,
    notes: {
        id: '',
        note_header: '',
        note_body: ''
    }

}



export const fetchEditNotes = createAsyncThunk<MainNote, string, { rejectValue: string }>(
    'notesEdit/fetchEditNotes',
    async function (url, { rejectWithValue }) {
        try {
            if (url === 'new') {
                return null
            }

            const response = await notes.get(`notes/${url}`);  

            if (response.status !== 200) {
                return rejectWithValue('Server Error!');
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('An unexpected error occurred.');
        }
    }
);


export const changeNote = createAsyncThunk<MainNote, MainNote, { rejectValue: string }>(
    'notesEdit/changeNote',
    async function (data, { rejectWithValue }) {
        try {

            const response = await notes.patch(`/notes/${data.id}`,
                data
            );
           
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



export const newNoteFetch = createAsyncThunk<void, MainNote, { rejectValue: string }>(
    'notesEdit/newNoteFetch',
    async function (data, { rejectWithValue }) {
        try {   
            
            const response = await notes.post('/notes',
                data
            );
            if (response.status !== 201) {
                return rejectWithValue('Server Error!');
            }
            
        } catch (error) {
            console.error(error);
            return rejectWithValue('An unexpected error occurred.');
        }
    }
);





const noteEditSlice = createSlice({
    name: 'notesEdit',
    initialState,
    reducers: {
        initializeState: (state) => {
            return initialState;
        },
        resetErrorEdit:(state) => {
            state.error = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEditNotes.pending, (state) => {
                state.status = true;
                state.error = false;
            })
            .addCase(fetchEditNotes.fulfilled, (state, action: PayloadAction<MainNote | null, string>) => {
                state.status = false;
                state.error = false;
                if (action.payload !== null) {
                    const { id, note_header, note_body } = action.payload;
                    state.notes = { id, note_header, note_body };
                } else {
                    state.notes = initialState.notes;
                }

            })
            .addCase(fetchEditNotes.rejected, (state) => {
                state.status = false;
                state.error = true;
            })




            .addCase(changeNote.pending, (state) => {
                state.status = true;
                state.error = false;
            })
            .addCase(changeNote.fulfilled, (state, action: PayloadAction<MainNote, string>) => {
                state.status = false;
                state.error = false;

                const { id, note_header, note_body } = action.payload;
                state.notes = { id, note_header, note_body };
            })
            .addCase(changeNote.rejected, (state) => {
                state.status = false;
                state.error = true;
            })
    }
});
export const { initializeState, resetErrorEdit } = noteEditSlice.actions;

export default noteEditSlice.reducer;
