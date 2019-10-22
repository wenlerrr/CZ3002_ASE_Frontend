import React,{useState, useEffect} from 'react';
import {Card,Typography,AppBar,Toolbar} from '@material-ui/core';
import CommunityCard from "../main/CommunityCard";
var { similarCommunityList } = require("../../data/SimilarCommunityList");

export default function SimilarCommunities(props) {
  const [simCom, setSimCom] = useState(similarCommunityList.filter((community) => {
    return community._id !== props.communityID
  }));   

  useEffect(() => {
    var communities =  similarCommunityList.filter((community) => {
      return community._id !== props.communityID
    })
    setSimCom(communities);
  }, [props.communityID])

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
            changeCommunityID={props.changeCommunityID}
            sim={true}
            sub={simComInd}
            addSub={addSub}
            removeSub={removeSub}
          />
        ))}
        </Card>
    );
}