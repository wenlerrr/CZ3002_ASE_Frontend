import React,{useState} from 'react';
import {Card,Typography,AppBar,Toolbar} from '@material-ui/core';
import CommunityCard from "../main/CommunityCard";
var { similarCommunityList } = require("../../data/SimilarCommunityList");

export default function SimilarCommunities(props) {
  const [simCom, setSimCom] = useState(
    similarCommunityList);   

  const addSub={};
  const removeSub={};
    return (

        <Card size='sm'>
            <AppBar  position='relative' color="primary" >
          <Toolbar>
            <Typography  variant="h5" gutterBottom>
            Similar Communities
          </Typography>
          
          </Toolbar>
        </AppBar>
            {simCom.map((simComInd) => (
          <CommunityCard
            sim={true}
            sub={simComInd}
            addSub={addSub}
            removeSub={removeSub}
          />
        ))}
        </Card>
    );
}