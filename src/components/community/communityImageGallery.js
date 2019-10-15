import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { makeStyles } from '@material-ui/core/styles';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import {Card,AppBar,Toolbar,Typography,CssBaseline,Collapse,Button} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    button: {
    //   marginLeft: theme.spacing(0),
    
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
  


export default function CommunityImageGallery() {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const[expand,setExpand]=useState(false);
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
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
          
          </Toolbar>
        </AppBar> 
        )}
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
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      
      </Card>
    </div>
  );
}