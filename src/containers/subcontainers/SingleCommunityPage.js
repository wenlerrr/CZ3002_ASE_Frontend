import React,{useState, useEffect}from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography, Button,Grid} from '@material-ui/core';
import CommunityInfo from "../../components/community/communityInfo";
import SimilarCommunities from "../../components/community/similarCommunities";
import VideoGallery from "../../components/communityVideo/videoGallery";
import MemberBar from "../../components/communityMember/memberBar";
import Forum from '../../components/communityForum/forum';
import API from '../../services/api2';

export default function SingleCommunityPage(props) {
    return(
        <div className="container">          
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <div>
                        <p></p><p></p><p></p> <p></p>
                        <CommunityInfo 
                        image='https://source.unsplash.com/user/erondu'
                        name='Community name'
                        description='Long Community Description'
                        joined={true}></CommunityInfo>
                        <p></p> <p></p>
                        <MemberBar></MemberBar>
                    </div>
                </Grid>
                <Grid item xs={4}>
                <p></p><p></p><p></p> <p></p>
                    <SimilarCommunities></SimilarCommunities>
                </Grid>
                <VideoGallery></VideoGallery>
                <p></p>
                <p></p>
                <Forum></Forum>
            </Grid>
        </div>
    )

}