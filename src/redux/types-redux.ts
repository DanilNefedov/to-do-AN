
export type TempateSlices = {
    status: boolean,
    error: boolean,
}
export interface MainNote {
    id: string,
    note_header: string,
    note_body: string
}




export type NoteMainSlice = TempateSlices & {
    notes: MainNote[]
}





export type EditNotes = TempateSlices & {
    notes: MainNote
}