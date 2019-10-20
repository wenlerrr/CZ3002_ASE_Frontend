import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid
} from "@material-ui/core";
import CommunityInfo from "../../components/community/communityInfo";
import SimilarCommunities from "../../components/community/similarCommunities";
import VideoGallery from "../../components/communityVideo/videoGallery";
import MemberBar from "../../components/communityMember/memberBar";
import Forum from "../../components/Forum/Forum";
import CommunityImageGallery from '../../components/community/communityImageGallery'
import Navbar from "../NavBar";
var { communityList } = require("../../data/CommunityList");

export default function SingleCommunityPage(props) {
  // to extract info of the correct community given the community ID
  //community ID can be extracted as {props.location.state.communityID}
  const [community, setCommunity] = useState(
    // console.log(props.location.state.communityID),

    communityList.filter(community => {
      // console.log(community._id==props.location.state.communityID)
      return community._id == props.location.state.communityID;
    })[0],
    
  );

  const { username } = props.currentUser.user;

  return (
    <div>
    <div className="container">
    <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div>
            <p></p>
            <p></p>
            <p></p> <p></p>
            <CommunityInfo
              // image='https://source.unsplash.com/user/erondu'
              image={community.image}
              // name='Community name'
              name={community.name}
              // description='Long Community Description'
              description={community.description}
              joined={community.joined}
            ></CommunityInfo>
            <p></p> <p></p>
            <MemberBar></MemberBar>
          </div>
        </Grid>
        <Grid item xs={4}>
          <p></p>
          <p></p>
          <SimilarCommunities ></SimilarCommunities>
        </Grid>
        <Grid item xs={12}>
        <CommunityImageGallery joined={community.joined}></CommunityImageGallery>
        <p></p> <p></p>
        </Grid>
        <Grid item xs={12}>
        <VideoGallery></VideoGallery>
        <p></p> <p></p>
        </Grid>
        <Grid item xs={12}>
        <Forum username={username}></Forum>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}
