import React,{useState, useEffect}from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography, Button,Grid} from '@material-ui/core';
import CommunityInfo from "../../components/community/communityInfo";
import SimilarCommunities from "../../components/community/similarCommunities";
import VideoGallery from "../../components/communityVideo/videoGallery";
import MemberBar from "../../components/communityMember/memberBar";
import Forum from '../../components/communityForum/forum';
import API from '../../services/api2';
import ImageSlider from 'ac-react-simple-image-slider'
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
                        // image='https://source.unsplash.com/user/erondu'
                        image={community.image}
                        // name='Community name'
                        name={community.name}
                        // description='Long Community Description'
                        description={community.description}
                        joined={community.joined}></CommunityInfo>
                        <p></p> <p></p>
                        <MemberBar></MemberBar>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    
                <p></p><p></p><p></p> <p></p>
               
                    <SimilarCommunities></SimilarCommunities>
                </Grid>
                <div>
                    {/* <ImageSlider height='480px' width='480px' data={imageData}/>      */}
                    <CommunityImageGallery></CommunityImageGallery>
                    <p></p><p></p><p></p> <p></p>
                </div>
                <VideoGallery></VideoGallery>
                <p></p><p></p><p></p> <p></p>

                <Forum></Forum>
            </Grid>
        </div>
    )

}