import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
import { Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    profile:{
        height:80,
        width:80,
        alignLeft:30,
    },
    main:{
        display: 'flex',
        height:120,
        width:150,
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding:20,
        paddingTop:50,
    },
}));

export default function Member(props) {
    const classes = useStyles();
    return (
        <div className={classes.main} >
            <Avatar className={classes.profile} image='https://source.unsplash.com/user/erondu'> </Avatar>
            <Typography className={classes.name} variant="h6">Mary Lamb</Typography>
        </div>
    );
}