

export const mainListBox = {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    scrollbarColor: "#323232 #181818",
    pr: '10px',
}


export const listItem = { 
    bgcolor: 'background.default', 
    m: '10px 0', 
    justifyContent:'space-between', 
    alignItems:'center' 
}


export const deleteBtn = {
    p:'5px', 
    borderRadius:"50%", 
    "&:hover":{
        backgroundColor:'error.main', 
        '& svg':{
            color:'error.contrastText'
        }
    }
}