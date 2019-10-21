import React, { Component } from "react";
import Posts from "./Posts";
import PostDataAcapella from "./PostsDataAcapella";
import PostDataBallet from "./PostsDataBallet";
import AddNewPost from "./AddNewPost";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.category_id == 14 ? PostDataAcapella : PostDataBallet
    };
    this.handleAddPost = this.handleAddPost.bind(this);
    this.handleReply = this.handleReply.bind(this);
  }

  useStyles = makeStyles(theme => ({
    toolbarButtons: {
      marginLeft: "auto",
      marginRight: -12
    },

    text: {
      padding: theme.spacing(2, 2, 0)
    },
    card: {
      display: "flex",
      marginTop: 100,
      marginBottom: 100,
      paddingBottom: 100
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
    }
  }));

  handleReply(comment, id) {
    console.log("comment" + comment);
    console.log("id" + id);

    const newReply = {
      id: new Date().getTime(),
      username: this.props.username,
      comment: comment,
      person: "https://randomuser.me/api/portraits/women/60.jpg"
    };

    this.setState(prevState => ({
      posts: prevState.posts.map(post => {
        if (post.id !== id) {
          return post;
        }
        return {
          ...post,
          reply: [...post.reply, newReply]
        };
      })
    }));
  }

  handleAddPost = (title, description) => {
    console.log("title " + title);
    console.log("desdription " + description);

    const newPost = {
      id: new Date().getTime(),
      person: "https://randomuser.me/api/portraits/women/60.jpg",
      title: title,
      description: description,
      reply: []
    };

    this.setState({ posts: [newPost, ...this.state.posts] });
  };

  render() {
    const posts = this.state.posts.map(post => (
      <Posts
        key={post.id}
        item={post}
        handlePost={this.handleAddPost}
        handleReply={this.handleReply}
      />
    ));

    return (
      <div className="container">
        <React.Fragment>
          <CssBaseline />
          <Card clasName={this.useStyles.main}>
            {/* Option bar at the top */}
            <AppBar
              position="relative"
              color="primary"
              className={this.useStyles.appBar}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                {/*Tittle of toolbar*/}
                <Typography
                  className={this.useStyles.text}
                  variant="h5"
                  gutterBottom
                >
                  Forum
                </Typography>
                <div className={this.useStyles.grow} />

                <IconButton
                  edge="end"
                  color="inherit"
                  className={this.useStyles.toolbarButtons}
                >
                  <Fab
                    color="secondary"
                    aria-label="add"
                    className={this.useStyles.fabButton}
                  >
                    <AddNewPost handleAddPost={this.handleAddPost} />
                  </Fab>
                </IconButton>
              </Toolbar>
            </AppBar>

            {/*Displays the Forum Threads*/}
            <ListSubheader className={this.useStyles.subheader}>
              Today
            </ListSubheader>
            <List className={this.useStyles.list}>{posts}</List>
          </Card>
        </React.Fragment>
      </div>
    );
  }
}

export default Forum;
