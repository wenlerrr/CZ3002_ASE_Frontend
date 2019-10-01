import React, {useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography, Button} from '@material-ui/core';

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
  cover_small:{
    width: 150,
    height: 100,
  },
  button:{
    margin:5
  }
}));

export default function CommunityCard({sim, key,index,sub,addSub,removeSub}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {sim? (<CardMedia className={classes.cover_small} image={sub.image}/>) :
     ( <CardMedia className={classes.cover}image={sub.image}/> )}   
      <div className={classes.details}>
        <CardContent className={classes.content}>
          
          {sim?  
          (<Typography variant="h5">{sub.name}
          </Typography>)
          :
            (<div>
            <Typography component="h4" variant="h4">{sub.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">{sub.description}
            </Typography> </div>)}   
          
          <Button variant="contained" colour='secondary'className={classes.button}> 
          View
            </Button>
            {sub.joined? (
              <Button variant="contained" colour='secondary'className={classes.button} onClick={() => removeSub(index)}> 
              Quit</Button>)
              : 
              (<Button variant="contained" colour='secondary'className={classes.button} onClick={() => addSub(index)}> 
              Join</Button>)
              }
            
        </CardContent> 
      </div>         
     </Card>
  );
}