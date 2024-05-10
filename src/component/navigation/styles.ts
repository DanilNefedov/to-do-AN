

export const containerNavigation = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'background.default',
    p:'0!important',
}


export const btnNavigation = {
    width:'100%',
    backgroundColor:'transparent',
    borderRadius:'0',
    p:'10px 0',
    color:'text.primary',

    '&:hover':{
        backgroundColor:'primary.dark'
    },

    '&.active':{
        backgroundColor:'primary.main'
    }, 

    '&.active:hover':{
        backgroundColor:'primary.dark'
    }
}