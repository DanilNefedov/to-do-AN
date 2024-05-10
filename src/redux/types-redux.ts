

export type NoteMainSlice = {
    status: boolean,
    error: boolean,
    notes: MainNote[]

}

export interface MainNote {
    id: string,
    note_header: string,
    note_body: string
}