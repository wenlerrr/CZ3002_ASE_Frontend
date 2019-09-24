import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justify:'space-between',
    margin:'40px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 350,
    height: 250,
  },
  
  button:{
    margin:5
  }
}));

export default function CommunityCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        // image='https://source.unsplash.com/user/erondu'
        // title="Live from space album cover"
        image={props.image}
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
          View
            </Button>
            <Button variant="contained" colour='secondary'className={classes.button}> 
            Join
            </Button>
        </CardContent> 
      </div>
          
     </Card>
  );
}