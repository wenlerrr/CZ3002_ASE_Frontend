import React,{useState} from "react";
import CommunityCard from "../../components/main/CommunityCard";
import InnerNavbar from "../../components/main/InnerNavBar";
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {fade,makeStyles}from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

}));

export default function Explore() {
  const [exploreList, setExploreList] = useState([
    {
      name: "Explored Community 1",
      description: "A whole new world 1",
      image:'https://source.unsplash.com/user/erondu',
      joined: false
    },
    {
        name: "Explored Community 2",
        description: "A whole new world 2",
        image:'https://source.unsplash.com/user/erondu',
        joined: false
    },
    {
        name: "Explored Community 3",
        description: "A whole new world 3",
        image:'https://source.unsplash.com/user/erondu',
        joined: false
    },
  ]);   

    const classes = useStyles();
    return (
        <div className="container">
            <InnerNavbar></InnerNavbar>
            <div className={classes.search} align='right'>
              <InputBase placeholder="Search…"/>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
            </div>
            <div >
              {exploreList.map((com, index) => (
                <CommunityCard
                  sim={false}
                  key={index}
                  index={index}
                  sub={com}
                  // addSub={addSub}
                  // removeSub={removeSub}
                />
              ))}
             </div>
         </div>
    )
}