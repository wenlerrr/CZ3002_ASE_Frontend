import React,{useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,Typography,AppBar,Toolbar} from '@material-ui/core';
import CommunityCard from "../main/CommunityCard";

export default function SimilarCommunities(props) {
  const [simCom, setSimCom] = useState([
    {
      name: "Hall 1",
      description: "Community 1 that you subscribed to!",
      image:'https://source.unsplash.com/user/erondu',
      joined: false
    },
    {
        name: "Hall 2",
        description: "Community 2 that you subscribed to!",
        image:'https://source.unsplash.com/user/erondu',
        joined: false
    },
    {
        name: "Hall 3",
        description: "Community 3 that you subscribed to!",
        image:'https://source.unsplash.com/user/erondu',
        joined: false
    },
  ]);   
    return (

        <Card size='sm'>
            <AppBar  position='relative' color="primary" >
          <Toolbar>
            <Typography  variant="h5" gutterBottom>
            Similar Communities
          </Typography>
          
          </Toolbar>
        </AppBar>
            {simCom.map((simCom, index) => (
          <CommunityCard
            sim={true}
            key={index}
            index={index}
            sub={simCom}
            // addSub={addSub}
            // removeSub={removeSub}
          />
        ))}
        </Card>
    );
}