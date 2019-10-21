import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import ForumComment from "./ForumComment";

class ForumWriteReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state.comment);
  }

  handleClick = e => {
    //add one comment
    e.preventDefault();
    this.props.handleReply(this.state.comment, this.props.postid);
    console.log(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Profile Picture"
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />
        </ListItemAvatar>
        <TextField
          margin="dense"
          id="comment"
          type="title"
          fullWidth
          value={this.state.comment}
          onChange={this.onChange}
        />
        <Button variant="contained" colour="primary" onClick={this.handleClick}>
          {" "}
          Comment{" "}
        </Button>
      </ListItem>
    );
  }
}

export default ForumWriteReply;
