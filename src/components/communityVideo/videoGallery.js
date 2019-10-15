import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Collapse, Paper,Card,CardContent,Button,CardMedia,IconButton,Fab,Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText,TextField,} from '@material-ui/core';
import Video from './video'
import Gallery from "react-photo-gallery";
import {Player} from 'video-react';

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
  
  export default function VideoGallery(props) {
    const [open, setOpen] =useState(false);
    const[expand,setExpand]=useState(false);
    const classes = useStyles();
    const photos = [
      {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        width: 4,
        height: 3
      },
    ]
    const playVideo = index=> {
      alert("Hello World!");
      return (
        <Player>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      );
    }
    
    const handlePost=()=>{
      setOpen(false);
      //upload
    }
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
          <IconButton edge="end" color="inherit" className={classes.toolbarButtons}>
            <Fab  edge="end" color="secondary" aria-label="add"  onClick={setOpen(true)}>
              <Typography variant='h6'> +</Typography>
              </Fab>
          </IconButton> 
          </Toolbar>
        </AppBar>
        
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" >
                    <Typography variant="h5" justifyContent ='center'>New Video</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      Upload a new video in the community :)
                    </DialogContentText>
                    <TextField   autoFocus margin="dense" id="name"  label="Video's Title"  type="title" fullWidth
                    />
                    {/* <TextField autoFocus  margin="dense"  id="name"  label="Video's Description"    type="description"  fullWidth  multiline='True'
                      rows='3'
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={setOpen(false)} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handlePost} color="primary">
                      Post
                    </Button>
                  </DialogActions>
                </Dialog>


        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent className={classes.content} >
                   
                   <Video/> <Video/>
                </CardContent> 
                {expand? '' :<Button  size="large" color="primary" fullWidth='true'  onClick={() => setExpand(!expand)}>
                <Typography variant='h6'> See more </Typography>
                </Button>}
                    <Collapse in={expand} timeout="auto" unmountOnExit>
                    <div>
                    <span>
                    <CardContent className={classes.content} >
                    <Video></Video><Video></Video>
                    </CardContent> 
                    {expand? <Button colour='primary' size="large" fullWidth='true' onClick={() => setExpand(!expand)}>
                    <Typography variant='h6'> Show less </Typography>
                    </Button>: ''}  
                      
                    </span>
                    </div>
                    </Collapse>
            </div>
          

          </Card>     
        </Card>
      </React.Fragment>
      </div>
    );
  }