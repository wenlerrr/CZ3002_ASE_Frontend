import React from "react";
import CommunityCard from "../../components/main/CommunityCard";
import InnerNavbar from "../../components/main/InnerNavBar";
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {fade,makeStyles}from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

export default function Explore() {
    const classes = useStyles();
    return (
        <div className="container">
            <InnerNavbar></InnerNavbar>
            <div className={classes.search} align='right'>
            <InputBase
              placeholder="Search…"
            //   classes={{
            //     root: classes.inputRoot,
            //     input: classes.inputInput,
            //   }}
            //   inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
          </div>
            
            <div >

            <h1>HIIIIIII WLLLLLLLLLLL!</h1>
            <p>This is the explore page!!!</p>
            
            <CommunityCard 
            image='https://source.unsplash.com/user/erondu'
            name='Community name'
            description='Community Description'
            ></CommunityCard>
            
        </div>
        </div>
    )
}