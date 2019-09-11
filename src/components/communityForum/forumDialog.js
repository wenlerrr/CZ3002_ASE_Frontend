import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';


export default function ForumDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  
  function handlePost(){
    setOpen(false);
    //dk how the logic works help lah 
  }
  return (
    <div>
      <Hidden>
      <Button onClick={handleClickOpen}>
        +
      </Button>
      </Hidden>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" >

          <Typography variant="h5" justifyContent ='center'>New Post</Typography>
          </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share your thoughts :)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="title"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="description"
            fullWidth
            multiline='True'
            rows='3'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}