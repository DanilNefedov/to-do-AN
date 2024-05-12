import { Box, Button, Container, FormControl, FormHelperText} from "@mui/material";
import { boxBtns, containerForm, formControl, formSection } from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { v4 as uuidv4 } from 'uuid';
import { changeNote, newNoteFetch } from "../../redux/slices/editNotesSLice";
import { useNavigate } from "react-router-dom";


interface valueData {
    note_header: string,
    note_body: string
}


export function EditPage() {
    const editNoteData = useAppSelector(state => state.edit)
    const dispatch = useAppDispatch()
    const { id, note_body, note_header } = editNoteData.notes
    const init = {
        id,
        note_header,
        note_body,
    }

    let navigate = useNavigate();

    useEffect(() => {
        if (editNoteData.error) {
            return navigate("*");
        }
    }, [editNoteData.error]);


    function validateValue(value: string) {
        if (value.trim() === '') {
            return 'Empty name'
        }
    }


    function newNote(values: valueData) {
        const data = {
            id: id === '' ? uuidv4() : id,
            note_header: values.note_header,
            note_body: values.note_body
        }
        if (id === '') {
            dispatch(newNoteFetch(data))
        } else {
            dispatch(changeNote(data))
        }
    }


    return (
        <Formik
            key={id}
            initialValues={init}
            onSubmit={(values) => {
                newNote(values)
            }}
        >
            {({ errors, touched, resetForm }) => (
                <Box component={Form} sx={formSection}>
                    <Container maxWidth='sm' sx={containerForm}>

                        <FormControl sx={formControl}>
                            <Field
                                validate={validateValue}
                                name='note_header'
                                placeholder='Name'
                                className={`formName ${errors.note_header && touched.note_header ? 'active' : ''}`} >

                            </Field>
                            <FormHelperText component='span' id="my-helper-text">Enter the name of the note.</FormHelperText>
                        </FormControl>

                        <FormControl sx={{ m: '15px 0', ...formControl }}>
                            <Field
                                rows="4" cols="50"
                                component='textarea'
                                validate={validateValue}
                                name='note_body'
                                placeholder='Description'
                                className={`formName textarea ${errors.note_body && touched.note_body ? 'active' : ''}`} >

                            </Field>
                            <FormHelperText component='span' id="my-helper-text">Enter a description of the note.</FormHelperText>

                        </FormControl>
                        <Box sx={boxBtns}>
                            <Button variant="contained" type="reset" onClick={() => resetForm({ values: { note_header, note_body, id } })} >Clean</Button>
                            <Button variant="contained" type="submit">New Note</Button>
                        </Box>


                    </Container>

                </Box>


            )}
        </Formik>

    )
}