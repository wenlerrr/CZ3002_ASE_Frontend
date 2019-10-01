import React,{useState}from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,CardContent,CardMedia,Typography, Button,Grid} from '@material-ui/core';
import CommunityInfo from "../community/communityInfo";
import SimilarCommunities from "../community/similarCommunities";
import VideoGallery from "../communityVideo/videoGallery";
import MemberBar from "../communityMember/memberBar";
import Forum from '../communityForum/forum';


export default function SingleCommunityPage() {
    return(
        <div>
            <p>This is what you will see if u click open a community card</p>
            <Grid container spacing={3}>
                <Grid item xs='8'>
                    <div>
                        <CommunityInfo image='https://source.unsplash.com/user/erondu'
                        name='Community name'
                        description='Long Community Description'
                        joined={true}></CommunityInfo>
                        <p></p>
                        <p></p>
                        <MemberBar></MemberBar>
                    </div>
                </Grid>
            <Grid item xs='4'>
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