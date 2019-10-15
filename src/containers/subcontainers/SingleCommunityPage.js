import React,{useState, useEffect}from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography, Button,Grid} from '@material-ui/core';
import CommunityInfo from "../../components/community/communityInfo";
import SimilarCommunities from "../../components/community/similarCommunities";
import VideoGallery from "../../components/communityVideo/videoGallery";
import MemberBar from "../../components/communityMember/memberBar";
import Forum from '../../components/communityForum/forum';
import API from '../../services/api2';
// import ImageSlider from 'ac-react-simple-image-slider'
import CommunityImageGallery from '../../components/community/communityImageGallery'

var { communityList } = require('../../data/CommunityList');
var { joinedCommunityList } = require('../../data/JoinedCommunityList');


export default function SingleCommunityPage(props) {
    // to extract info of the correct community given the community ID
    //community ID can be extracted as {props.location.state.communityID}
    const[community,setCommunity]=useState( 
        (communityList.filter((community) => {
        return community._id==props.location.state.communityID
      }
      ))[0])
     
      const imageData=[
          {
              src:'https://source.unsplash.com/user/erondu',
              title:'title 1'
          },
          {
            src:'https://source.unsplash.com/user/erondu',
            title:'title 2'
        },
      ]

    return(
        <div className="container">          
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <div>
                        <p></p><p></p><p></p> <p></p>
                        <CommunityInfo 
                        // image='http://d23u81scbs00hn.cloudfront.net/logos/5da5e1fccc821b0012474a0e/46a259c0-ef5e-11e9-bb12-bf6b01996e4a.jpg'
                        image={community.image}
                        // name='Community name'
                        name={community.name}
                        // description='Ballet is one of the most classical form of dance and is well known for its grace and intricate gestures. We are a fun bunch of ballet lovers and are looking for like-minded ballet dancers to form an item. Fret not if you are new to ballet, as we are more than willing to share the basics of ballet. '
                        description={community.description}
                        joined={community.joined}></CommunityInfo>
                        <p></p> <p></p>
                        <MemberBar></MemberBar>
                    </div>
                </Grid>
                <Grid item xs={4}>    
                <p></p><p></p><p></p> <p></p><SimilarCommunities></SimilarCommunities>
                </Grid>
                <Grid item xs={12}> 
                    {/* <ImageSlider height='480px' width='480px' data={imageData}/>      */}
                    <CommunityImageGallery></CommunityImageGallery>
                    <p></p><p></p><p></p> <p></p>
                    </Grid>
                {/* <Image2Slider></Image2Slider> */}
                <Grid item xs={12}> 
                <VideoGallery></VideoGallery>
                <p></p><p></p><p></p> <p></p>
                </Grid>
                <Forum></Forum>
            </Grid>
        </div>
    )

}