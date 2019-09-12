import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Card, CardMedia, CardActions, CardContent, Button} from '@material-ui/core';
import {Player} from 'video-react';
import './video.css'


const useStyles = makeStyles(theme => ({
    cardGrid: {
    //   paddingTop: theme.spacing(2),
    //   paddingBottom: theme.spacing(2),
      height:400,
      width:500,
      margin: 50,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    
    cardContent: {
      flexGrow: 1,
    },
    
  }));

export default function Video(props){
    const classes = useStyles();
    return(
        <Grid item className={classes.cardGrid}>
                <Card className={classes.card}>
                    <Player>
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Video Title
                    </Typography>

                  </CardContent>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
);
}