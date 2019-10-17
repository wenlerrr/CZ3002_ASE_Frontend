import React from "react";
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
import ForumComment from "./forumComment";
import ForumWriteReply from "./forumWriteReply";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
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
    paddingLeft: 20
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

export default function ForumPosts(props) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <React.Fragment key={props.id}>
      {props.id === 1 && (
        <ListSubheader className={classes.subheader}>Today</ListSubheader>
      )}
      {props.id === 3 && (
        <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>
      )}
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={props.person} />
        </ListItemAvatar>
        <ListItemText primary={props.primary} secondary={props.secondary} />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Card className={classes.comment}>
          <ForumComment
            userprofile="https://source.unsplash.com/user/erondu"
            username="Wen Le"
            comment="Sure!"
          ></ForumComment>
          <ForumWriteReply />
        </Card>
      </Collapse>
    </React.Fragment>
  );
}
