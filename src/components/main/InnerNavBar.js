import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  appname: {
    marginRight: "10px", 
    marginLeft: "10px"},
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    //justifyContent: "flex-end",
    position: 'relative',
    display: 'flex',
    overflowX: 'auto',
    align: "right",
    marginLeft:'auto',
    marginRight:'0'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function InnerNavbar() {
  const classes = useStyles();
  
  return (
      <div>
    {/* <Toolbar className={classes.toolbar}>
          <Typography className={classes.appname}>JioBook  </Typography>
          <Link to="/" >
            <i className="fas fa-home" style={{color: "black"}} />
          </Link>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar> */}
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Link to="/Explore"> Explore Community</Link>
        <Link to="/community"> My Community</Link>
        <Link to="/create"> Create Community</Link>
        </Toolbar>
    </div>
  );
}