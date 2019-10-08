import React,{useState} from "react";
import CommunityCard from "../../components/main/CommunityCard";
import InnerNavbar from "../../components/main/InnerNavBar";
import {Button,InputBase,FormControl,Select,MenuItem,InputLabel,Typography,Fab,IconButton} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {fade,makeStyles}from '@material-ui/core/styles';
var { categoryList } = require('../../data/CategoryList');
var { exploredCommunityList } = require('../../data/ExploredCommunityList');
var { joinedCommunityList } = require('../../data/JoinedCommunityList');


const useStyles = makeStyles(theme => ({
  margin:{
    margin: theme.spacing(1),
  }
}));

export default function Explore() {
  const [category, setCategory]=useState('')
  const [exploreList, setExploreList] = useState(exploredCommunityList);   
  const [subList, setSubList] = useState(joinedCommunityList);   
  
  //addSub and removeSub doesnt do anything here for now
  const removeSub = id => {
    let newSubList = Array.from(subList)
    // newSubList.splice(index, 1);
    newSubList = newSubList.filter((community) => {
      return community._id!=id
    })
    setSubList(newSubList);
  };

  const addSub = sub => {
    const newSubList = [...subList,{sub}];
    setSubList(newSubList);
  };

  const handleFilter= event =>{
    setCategory(event.target.value)
    console.log(event.target.value)
    let newExploreList = Array.from(exploreList)
        // newSubList.splice(index, 1);
    newExploreList = newExploreList.filter((community) => {
          return community.category_id==event.target.value
        })
    setExploreList(newExploreList);
  }

  const clearFilter=event =>{
    setExploreList(exploredCommunityList);
  }

    const classes = useStyles();
    return (
        <div className="container">
            <div className={classes.search} align='right'>
              <p> </p><p></p> 
            <Typography variant='h5'>Filter by categories:</Typography>
            <FormControl>
          <InputLabel htmlFor="age-simple">Category</InputLabel>
          <Select
            style={{ width: 200}}
            value={category}
            onChange={(event) => {handleFilter(event)
              ;}}
          >
            {categoryList.map((cat) => (
        <MenuItem value={cat.category_id} name={cat.category_name}>{cat.category_name}</MenuItem>
        ))} 
          </Select>
        </FormControl>
        <Button variant="outlined" size="small" color="primary" className={classes.margin}
        onClick={() => {clearFilter();}}
        >
          Clear
        </Button>
       {/* <IconButton aria-label="delete" className={classes.margin}>
          <ClearIcon fontSize="small" />
        </IconButton> */}
            </div>
            <div >
              {exploreList.map((com, index) => (
                <CommunityCard
                  sim={false}
                  key={index}
                  index={index}
                  sub={com}
                  addSub={addSub}
                  removeSub={removeSub}
                />
              ))}
             </div>
         </div>
    )
}