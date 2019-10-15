import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,CssBaseline,Toolbar,Typography,CardMedia,Button,CardContent,Card,IconButton,Fab} from '@material-ui/core';
import Member from './member'


const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    card:{
      display: 'flex',
      
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    cover: {
        width: 350,
        height: 250,
      },
    button:{
        right:0
    },
    content:{
      display:'flex',
      flexDirection:'row',
    },
    toolbarButtons: {
      marginLeft: "auto",
      marginRight: -12
    },
  }));
  
  export default function MemberBar(props) {
    const classes = useStyles();
    const [showAllMember, setShowAllMember]=useState(false);
    
  
    return (
      <div className="container">
      <React.Fragment>
        <CssBaseline />
        <Card clasName={classes.main}>
        <AppBar  position='relative' color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.text} variant="h5" gutterBottom>
            Members
          </Typography>
          {/* <Button edge="end" color="inherit" className={classes.toolbarButtons}
         
          >Show All</Button> */}
         
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
            
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Member></Member>
                    <Member></Member>
                </CardContent> 
                
            </div>
          
            </Card>
        
        </Card>
      </React.Fragment>
      </div>
    );
  }