import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import MoreIcon from "@material-ui/icons/MoreVert";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ForumComment from "./ForumComment.js";
import ForumWriteReply from "./ForumWriteReply";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };

    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState(prevState => {
      return { expanded: !prevState.expanded };
    });
  }

  useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(100, 100, 100)
    },
    paper: {
      paddingBottom: 50
    },
    list: {
      marginBottom: theme.spacing(2)
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: "auto",
      bottom: 0
    },
    grow: {
      flexGrow: 1
    },
    comment: {
      padding: "100px"
    },
    fabButton: {
      // position: 'absolute',
      // zIndex: 1,
      // bottom: 0,
      // left: 0,
      // right: 0,
      // margin: '0 auto',
    }
  }));

  render() {
    const reply = this.props.item.reply.map(reply => (
      <ForumComment
        key={reply.id}
        item={reply}
        userprofile={reply.person}
        username={reply.username}
        comment={reply.comment}
      />
    ));

    return (
      <div>
        <React.Fragment key={this.props.id}>
          {this.props.item.date === "Yesterday" && (
            <ListSubheader className={this.useStyles.subheader}>
              Yesterday
            </ListSubheader>
          )}
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={this.props.item.person} />
            </ListItemAvatar>
            <ListItemText
              primary={this.props.item.title}
              secondary={this.props.item.description}
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              {/* <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
              <IconButton
                className={clsx(this.useStyles.expand, {
                  [this.useStyles.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </ListItem>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Card className={this.useStyles.comment}>
              {this.props.item.reply.length === 0 ? <br /> : reply}
              <ForumWriteReply
                userprofile={this.props.item.reply.person}
                handleReply={this.props.handleReply}
                postid={this.props.item.id}
              />
            </Card>
          </Collapse>
        </React.Fragment>
      </div>
    );
  }
}

export default Posts;
