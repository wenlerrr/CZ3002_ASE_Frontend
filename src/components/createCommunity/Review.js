import React from 'react';
import {Typography} from '@material-ui/core';


export default function Review({info}) {
  return (
    <div>
      <Typography variant="h4"> Please confirm the following deatils before pressing the create button: </Typography>
      <p> </p>
      <Typography variant="h5"> Name:</Typography>
      <Typography variant="h6"> {info.name} </Typography>
      <p> </p>
      <Typography variant="h5"> Description: </Typography>
      <Typography variant="h6">{info.description} </Typography>
      <p> </p>
      <Typography variant="h5"> Category: </Typography>
      <Typography variant="h6">{info.category} </Typography>

    </div>
  );
}