import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Card, CardContent} from '@material-ui/core';
import {Player} from 'video-react';
import './video.css'
import {acapella_videos} from './videoData'
import { format } from 'util';

const useStyles = makeStyles(theme => ({
    cardGrid: {
    //   paddingTop: theme.spacing(2),
    //   paddingBottom: theme.spacing(2),
      height:500,
      width:500,
      marginRight: 50,
    },
    card: {
      height: 500,
      // display: 'flex',
      // flexDirection: 'column',
    },
    card_small:{
      height:400,
    },
    cardGrid_small:{
      height:400,
      width:500,
      marginRight: 50,
    },
    cardContent: {
      // flexGrow: 1,
      height:200,
    },
    
  }));

export default function Video(props){
    const classes = useStyles();
    return(
        <Grid item className={props.card_size?classes.cardGrid_small: classes.cardGrid}>
                <Card className={props.card_size? classes.card_small: classes.card}>
                     <Player
                    poster={props.poster}
                    src={props.src}
                    > 
                    </Player>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {props.title}
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