export const formSection = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (max-width: 800px)': {
        paddingRight: '35px',
    }

}


export const containerForm = {
    flexDirection: 'column',
    display: 'flex',
    bgcolor: 'background.default',
    p: '40px 0',
    alignItems: 'center',

    '@media (max-width: 500px)': {
        padding: '25px',
    }
}

export const formControl = {
    '& label': {
        mt: '7px'
    },
    width: '350',

    '@media (max-width: 500px)': {
        width: '220px',
    },

    '& .MuiFormLabel-root.Mui-focused': {
        color: 'text.primary'
    }
}


export const boxBtns = {
    maxWidth: '350px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 500px)': {
        width: '220px',
    },
}