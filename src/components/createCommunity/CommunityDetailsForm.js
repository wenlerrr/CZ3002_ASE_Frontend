import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FileUpload from '../upload/FileUpload'

export default function CommunityDetailsForm() {
  return (
    <React.Fragment>

      
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <Typography variant="h6" gutterBottom>
        Community Name
      </Typography>
          <TextField
            required
            id="communityName"
            name="communityName"
            fullWidth
          />
        </Grid>
     
        <Grid item xs={12} >
        <Typography variant="h6" gutterBottom>
        Community Description
        </Typography>
          <TextField
            required
            id="communityDescription"
            name="communityDescription"
            fullWidth
            placeholder="Describe more about your community"
            multiline='True'
          />
        </Grid>
        <Grid item xs={12} >
        <Typography variant="h6" gutterBottom>
        Upload a profile photo for this community
        </Typography>
        {/* <FileUpload/> */}
        
        <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
      />
        <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" >
          Upload
        </Button>
      </label>
        </Grid>
        {/* //wanna add some tags selection, maybe another page?? */}
        <Typography variant="h6" gutterBottom>
        Tag Selection
        </Typography>
        <Typography variant="h6" gutterBottom>
        To be added
        </Typography>

        
        
      </Grid>
    </React.Fragment>
  );
}