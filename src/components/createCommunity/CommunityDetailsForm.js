import React from 'react';
import {Grid,Typography,TextField,Button,FormControl,Select,MenuItem} from '@material-ui/core';
var { categoryList } = require('../../data/CategoryList');

export default function CommunityDetailsForm({info,setInfo}) {
  const setName = newname => {
    // const {name,...other}=info
    // const newInfo =[{...other},{name:newname}] ;
    const newInfo = {...info, name: newname}
    setInfo(newInfo);
  };
  const setDes = newDes => {
    // const {description,...other}=info
    const newInfo = {...info, description:newDes};
    setInfo(newInfo);
  };
  const setCategory= cat => {
    const newInfo = {...info, category:cat};
    setInfo(newInfo);
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Typography variant="h5" gutterBottom>
            Community Name
          </Typography>
          <TextField
              required
              id="communityName"
              name="communityName"
              value={info.name}
              onChange={e => setName(e.target.value)}
              fullWidth
          />
        </Grid>
     
        <Grid item xs={12} >
          <Typography variant="h5" gutterBottom>
          <p></p><p></p><p></p>
          Community Description
          <p></p><p></p><p></p>
          </Typography>
          <TextField
              required
              id="communityDescription"   
              name="communityDescription"
              fullWidth
              value={info.description}
              onChange={e => setDes(e.target.value)}
              // placeholder="Describe more about your community"
              multiline='True'
          />
        </Grid>

        <Grid item xs={12} >
          <Typography variant="h5" >
          <p></p><p></p><p></p>
          Category Selection
          <p></p><p></p><p></p>
          </Typography>
          <FormControl>
          {/* <InputLabel htmlFor="age-simple">Category</InputLabel> */}
          <Select
            style={{ width: 550}}
            value={info.category}
            onChange={(event) => {
              setCategory(event.target.value);}}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            
            <MenuItem value={'Anime'}>Anime</MenuItem>
            <MenuItem value={'Art'}>Art</MenuItem>
            <MenuItem value={'Cars'}>Cars</MenuItem>
            <MenuItem value={'Cooking'}>Cooking</MenuItem>
            <MenuItem value={'Coding'}>Coding</MenuItem>
            <MenuItem value={'Dance'}>Dance</MenuItem>
            <MenuItem value={'Entrepreneurship'}>Entrepreneurship</MenuItem>
            <MenuItem value={'Fashion'}>Fashion</MenuItem>
            <MenuItem value={'Food'}>Food</MenuItem>
            <MenuItem value={'Games'}>Games</MenuItem>
            <MenuItem value={'Gardening'}>Gardening</MenuItem>
            <MenuItem value={'Music'}>Music</MenuItem>
            <MenuItem value={'Investment'}>Investment</MenuItem>
            <MenuItem value={'KPop'}>KPop</MenuItem>
            <MenuItem value={'Language'}>Language</MenuItem>
            <MenuItem value={'Movies'}>Movies</MenuItem>
            <MenuItem value={'Marvel'}>Marvel</MenuItem>
            <MenuItem value={'Sports'}>Sports</MenuItem>
            <MenuItem value={'Travel'}>Travel</MenuItem>
            {/* {categoryList.map((cat) => (
        <MenuItem value={cat.category_id} name={cat.category_name}>{cat.category_name}</MenuItem>
        ))}  */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} >
        <Typography variant="h5" gutterBottom>
        <p></p><p></p><p></p>
        Upload a profile photo for this community
        <p></p><p></p><p></p>
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
        

        
        
      </Grid>
    </React.Fragment>
  );
}