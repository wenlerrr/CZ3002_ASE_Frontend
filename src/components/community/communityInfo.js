import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,CssBaseline,Toolbar,Typography,CardMedia,Button,CardContent,Card,Box} from '@material-ui/core';


// const primary = #2196f3;

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    card:{
      display: 'flex',
      alignItems: 'flex-start',
      flexGrow: 2,
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
        flexGrow: 2,
      },
    button:{
        right:0,
        position:"flex",
        top:0,
    },
    content: {
      width: '450px'
    }
  }));
  
  export default function CommunityInfo(props) {
    const classes = useStyles();
    
    
  
    return (
      <div className="container">
      <React.Fragment>
        <CssBaseline />
        <Box clasName={classes.main}>
        <AppBar  position='relative' color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.text} variant="h5" gutterBottom>
            Community Info
          </Typography>
          
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image='https://source.unsplash.com/user/erondu'
                // image={props.image}
            />
            
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {/* Live From Space */}
                    {props.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {/* Mac Miller */}
                    {props.description}
                </Typography>
                <Button variant="contained" colour='secondary'className={classes.button} > 
                        {/*if alr joined, show quit; else show join Join/Quit*/}
                        {props.joined ?"Quit":"Join"}
                   </Button> 
                </CardContent> 
                
            </div>
          
            </Card>
        
        </Box>
      </React.Fragment>
      </div>
    );
  }