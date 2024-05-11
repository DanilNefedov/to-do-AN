import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slices/mainNotesSlice";
import noteEditSlice from "./slices/editNotesSLice";


export const store = configureStore({
    reducer:{
        note:noteSlice,
        edit:noteEditSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


