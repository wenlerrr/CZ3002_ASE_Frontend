import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { fontFamily } from "@material-ui/system";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: "black"
    }
  }));

  const NavBar = (props) => {
    const classes = useStyles({});
    const [redirect, setRedirect] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleLogOut = e => {
        e.preventDefault();
        props.logout();
    }
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    if(redirect) {
        return (
            <Redirect
        to={{
          pathname: "/"
        }}
      />
        )
    } else {
      return (
        <div className={classes.root}>
            <AppBar
                position="static"
                style={{ backgroundColor: "white" }}
                elevation={3}
            >
                <Toolbar>
                <Typography align="left" variant="h6" className={classes.title}>
                    JioBook
                </Typography>
                    <div>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon color="primary" />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem>
                        Signed in as <b style={{marginLeft: "5px"}}> { ` ${props.currentUser.user.username}`}</b>
                        </MenuItem>
                        <MenuItem onClick={() => {setRedirect(true)}}>
                            Explore
                        </MenuItem>
                        <MenuItem>
                        <Link
                            to="/community"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            My Community
                        </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link
                            to="/create"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Create Community
                        </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link
                            to="/changePassword"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            Change Password
                        </Link>
                        </MenuItem>
                        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                    </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
      );
    }
  };

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}
  
export default connect(mapStateToProps, { logout })(NavBar);