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
            <MenuItem value={16}>Anime</MenuItem>
            <MenuItem value={2}>Art</MenuItem>
            <MenuItem value={7}>Cars</MenuItem>
            <MenuItem value={5}>Cooking</MenuItem>
            <MenuItem value={10}>Coding</MenuItem>
            <MenuItem value={3}>Dance</MenuItem>
            <MenuItem value={11}>Entrepreneurship</MenuItem>
            <MenuItem value={12}>Fashion</MenuItem>
            <MenuItem value={13}>Food</MenuItem>
            <MenuItem value={6}>Games</MenuItem>
            <MenuItem value={19}>Gardening</MenuItem>
            <MenuItem value={4}>Music</MenuItem>
            <MenuItem value={9}>Investment</MenuItem>
            <MenuItem value={15}>KPop</MenuItem>
            <MenuItem value={14}>Language</MenuItem>
            <MenuItem value={17}>Movies</MenuItem>
            <MenuItem value={18}>Marvel</MenuItem>
            <MenuItem value={1}>Sports</MenuItem>
            <MenuItem value={8}>Travel</MenuItem>
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