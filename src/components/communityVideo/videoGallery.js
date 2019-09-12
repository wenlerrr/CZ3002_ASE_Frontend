import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Paper} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card'
import Video from './video'



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
    
  }));
  
  export default function VideoGallery(props) {
    const classes = useStyles();
    
    
  
    return (
      <div className="container">
      <React.Fragment>
        <CssBaseline />
        <Card clasName={classes.main}>
        <AppBar  position='relative' color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.text} variant="h5" gutterBottom>
            Videos
          </Typography>
          
          </Toolbar>
        </AppBar>
        

        <Card className={classes.card}>
        {/* <Carousel> */}
            <div className={classes.details}>
                <CardContent className={classes.content} >
                    <Video/>
                    <Video/>
                    <Video/>
                </CardContent> 
                
            </div>
          {/* </Carousel> */}
          </Card>

            
        
        </Card>
      </React.Fragment>
      </div>
    );
  }