import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { makeStyles } from '@material-ui/core/styles';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import {Card,AppBar,Toolbar,Typography,CssBaseline,Collapse,Button,IconButton,Fab,Dialog,DialogTitle,DialogActions,DialogContent,DialogContentText,TextField} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    button: {
    //   marginLeft: theme.spacing(0),
    
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },

    toolbarButtons: {
      marginLeft: "auto",
      marginRight: -12
    },
  }));
  


export default function CommunityImageGallery(props) {
  const classes = useStyles();
  const [joined,setJoined]=useState(props.joined);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [open, setOpen] =useState(false);
  const[expand,setExpand]=useState(false);
  const sendAlert=()=>{
    alert("You can only post photos after you joined the community");
    setJoined(true)

  }
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const handlePost=()=>{
    setOpen(false);
    //dk how the logic works help lah 
  }


  return (
    <div className="container">
    
    <CssBaseline />
    <Card >
    {viewerIsOpen ?   '':(
        <AppBar  position='relative' color="primary">
         {/* className={classes.appBar}> */}
          <Toolbar>
            <Typography  variant="h5" gutterBottom>
            Community Photos
          </Typography>
          <IconButton edge="end" color="inherit" className={classes.toolbarButtons}>
            <Fab  edge="end" color="secondary" aria-label="add"  onClick={joined?() =>setOpen(true): ()=>sendAlert()}>
              <Typography variant='h6'> +</Typography>
              </Fab>
          </IconButton>
          </Toolbar>
        </AppBar> 
        )}
        <Dialog open={open} onClose={() =>setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" >
                    <Typography variant="h5" justifyContent ='center'>New Photo</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                      Upload a new photo in the community :)
                    </DialogContentText>
                    <TextField autoFocus  margin="dense"  id="name"  label="Photo's Description"    type="description"  fullWidth  multiline='True'
                      rows='3' />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() =>setOpen(false)} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={() =>handlePost} color="primary">
                      Post
                    </Button>
                  </DialogActions>
                </Dialog>

      <Gallery photos={photos.slice(0,7)} onClick={openLightbox} />
      {expand? '' :<Button  size="large" color="primary" fullWidth='true'  onClick={() => setExpand(!expand)}>
          <Typography variant='h6'> See more </Typography>
          </Button>}
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <div>
           <span>
           <Gallery photos={photos.slice(7,11)} onClick={openLightbox} />     
           {expand? <Button colour='primary' size="large" fullWidth='true' onClick={() => setExpand(!expand)}>
           <Typography variant='h6'> Show less </Typography>
               </Button>: ''}   
           </span>
        </div>
      </Collapse>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.description
              }))}
            />
            
          </Modal>
        ) : null}
      </ModalGateway>
      
      </Card>
    </div>
  );
}