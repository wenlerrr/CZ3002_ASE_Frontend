import React from "react";
import CommunityInfo from "../../components/community/communityInfo";
import Forum from '../../components/communityForum/forum';
import MemberBar from "../../components/communityMember/memberBar";
import VideoGallery from "../../components/communityVideo/videoGallery";
const Community = props => {
    
    return (
        <div className="container">
            <h1>HIIIIIII WLLLLLLLLLLL!</h1>
            <p>This is the community page!!!!</p>
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
            <Forum></Forum>
        </div>
    )
}

export default Community;