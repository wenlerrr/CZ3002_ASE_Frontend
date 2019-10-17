import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";

class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      description: ""
    };

    this.onChange = this.onChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handlePost = e => {
    e.preventDefault();
    this.props.handleAddPost(this.state.title, this.state.description);
    console.log(this.state.title);
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.handleClose();
  };

  handleClickOpen() {
    this.setState({ open: true });
    return this.state.open;
  }

  handleClose() {
    this.setState(prevState => {
      prevState.open = false;
      return prevState.open;
    });
  }

  render() {
    return (
      <div>
        <Hidden>
          <Button onClick={this.handleClickOpen}> + </Button>
        </Hidden>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            <Typography variant="h5" justifyContent="center">
              New Post
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Share your thoughts!</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="title"
              fullWidth
              onChange={this.onChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="description"
              fullWidth
              multiline="True"
              rows="3"
              onChange={this.onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handlePost} color="primary">
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddNewPost;
