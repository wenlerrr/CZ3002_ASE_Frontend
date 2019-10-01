import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Review({info}) {
  return (
    <div>
      <Checkbox/>
      <Typography> name is {info.name} </Typography>
      <Typography> description is{info.description} </Typography>
    </div>
  );
}