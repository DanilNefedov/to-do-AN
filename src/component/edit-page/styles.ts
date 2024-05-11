export const formSection = {
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
   
}


export const containerForm = {
    flexDirection: 'column', 
    display:'flex', 
    bgcolor:'background.default', 
    p:'40px 0', 
    alignItems:'center'
}

export const formControl = {
    '& label':{
        mt:'7px'
    }, 
    width:'350px', 

    '& .MuiFormLabel-root.Mui-focused':{
        color:'text.primary'
    }
}