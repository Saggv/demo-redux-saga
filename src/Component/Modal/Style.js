const style = theme =>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        justifyContent: 'center',
      },
      paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
      },
      header:{
        display:"flex",
        justifyContent:"space-between",
        justifyItems: "center",
        padding: theme.spacing(2, 4, 2),
        background:theme.colors.primary,
        color:theme.colors.white
       },
        icon:{
            fontSize:20,
            cursor:"pointer"
        }
});

export default style;