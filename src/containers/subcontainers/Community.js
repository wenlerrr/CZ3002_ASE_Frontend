import React from "react";
import {Grid} from '@material-ui/core'
import CommunityInfo from "../../components/community/communityInfo";
import Forum from '../../components/communityForum/forum';
import MemberBar from "../../components/communityMember/memberBar";
import VideoGallery from "../../components/communityVideo/videoGallery";
import CommunityCard from "../../components/main/CommunityCard"
import SimilarCommunities from "../../components/community/similarCommunities"
const Community = props => {
    
    return (
        <div className="container">
            <h1>HIIIIIII WLLLLLLLLLLL!</h1>
            <p>These are the communities you subscribed to!!!!</p>
            <CommunityCard 
            image='https://source.unsplash.com/user/erondu'
            name='Community subscribed 1'
            description='Community Description'
            ></CommunityCard>
            <CommunityCard 
            image='https://source.unsplash.com/user/erondu'
            name='Community subscribed 2'
            description='Community Description'
            ></CommunityCard>
            
            <p></p>
            <p>This is what you will see if u click open a community card</p>
            <Grid container spacing={3}>
                <Grid item xs='8'>
            <div>
            <CommunityInfo image='https://source.unsplash.com/user/erondu'
            name='Community name'
            description='Community Description'></CommunityInfo>
            <p></p>
            <p></p>
            <MemberBar></MemberBar>
            <p></p>
            <p></p>
            <VideoGallery></VideoGallery>
            <p></p>
            <p></p>
            
            </div>
            </Grid>
            <Grid item xs='4'>
            <SimilarCommunities></SimilarCommunities>
            </Grid>
            <Forum></Forum>
            </Grid>
        </div>
    )
}

export default Community;