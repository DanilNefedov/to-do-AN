import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Alert } from "@mui/material";

interface propsData {
    status:boolean
}

export function AlertUpdate({props}:{props:propsData}) {
    const {status} = props
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        if (status) {
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 1500);
        }
    }, [status]);


    return (
        <>
            {showSuccessAlert &&
                <Alert variant="filled" severity="success" sx={{ position: 'absolute', top: '10px' }}>
                    Everything updated!
                </Alert>}
        </>


    );
}