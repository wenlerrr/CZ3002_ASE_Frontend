import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    card:{
      display: 'flex',
      
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    cover: {
        width: 350,
        height: 250,
      },
    button:{
        right:0
    }
  }));
  
  export default function CommunityInfo(props) {
    const classes = useStyles();
    
    
  
    return (
      <div className="container">
      <React.Fragment>
        <CssBaseline />
        <Card clasName={classes.main}>
        <AppBar  position='relative' color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.text} variant="h5" gutterBottom>
            Community Info
          </Typography>
          
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image='https://source.unsplash.com/user/erondu'
                // image={props.image}
            />
            
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {/* Live From Space */}
                    {props.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {/* Mac Miller */}
                    {props.description}
                </Typography>
                <Button variant="contained" colour='secondary'className={classes.button}> 
                        Join/Quit
                   </Button> 
                </CardContent> 
                
            </div>
          
            </Card>
        
        </Card>
      </React.Fragment>
      </div>
    );
  }