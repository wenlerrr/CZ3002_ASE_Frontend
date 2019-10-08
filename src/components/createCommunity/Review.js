import React from 'react';
import {Typography,Grid,TextField,FormControlLabel,Checkbox,Card,CardMedia,CardContent} from '@material-ui/core';


export default function Review({info}) {
  return (
    <div>
      <Typography variant="h4"> Please confirm the following deatils before pressing the create button: </Typography>
      <p> </p>
      <Typography variant="h6"> Name:</Typography>
      <Typography variant="h7"> {info.name} </Typography>
      <p> </p>
      <Typography variant="h6"> Description: </Typography>
      <Typography variant="h7">{info.description} </Typography>
      <p> </p>
      <Typography variant="h6"> Category: </Typography>
      <Typography variant="h7">{info.category} </Typography>

    </div>
  );
}