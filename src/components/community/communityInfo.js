import React,{useState} from 'react';
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
    const [joined, setJoined]=useState(props.joined);
    const quitCommunityFunction= ()=>{
      if (window.confirm("Are you sure you want to quit the "+props.name+" community?")) {
          setJoined(false)
      } else {
        // Do nothing!
    }
      
    };
    const joinCommunityFunction= ()=>{
      if (window.confirm("Are you sure you want to join the "+props.name+" community?")) {
          setJoined(true)
      } else {
        // Do nothing!
    }
    
     };
  
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
                // image='https://source.unsplash.com/user/erondu'
                image={props.image}
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
                {joined ? (
              <Button
                variant="contained"
                colour="secondary"
                className={classes.button}
                onClick={() => quitCommunityFunction()}
              >
                Quit
              </Button>
            ) : (
              <Button
                variant="contained"
                colour="secondary"
                className={classes.button}
                onClick={() => joinCommunityFunction()}
              >
                Join
              </Button>
            )}
                </CardContent> 
                
            </div>
          
            </Card>
        
        </Box>
      </React.Fragment>
      </div>
    );
  }