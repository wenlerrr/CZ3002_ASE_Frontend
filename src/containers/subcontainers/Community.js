import React,{useState}from "react";
import {Grid} from '@material-ui/core'
import CommunityCard from "../../components/main/CommunityCard"
var { joinedCommunityList } = require('../../data/JoinedCommunityList');
var { communityList } = require('../../data/CommunityList');


const Community = props => {
    // const [joinedCommunityList]=useState(communityList.splice(0,3));
    // const joinedCommunityList=communityList.splice(0,3);
    const [subList, setSubList] = useState(joinedCommunityList); 
      
      
      const removeSub = id => {

        let newSubList = Array.from(subList)
        // newSubList.splice(index, 1);
        newSubList = newSubList.filter((community) => {
          return community._id!=id
        })
        setSubList(newSubList);
      };

      const addSub = sub => {
        const newSubList = [...subList,{sub}];
        setSubList(newSubList);
      };

    return (
        <div className="container">
            <div>
            {subList.map((sub) => (
          <CommunityCard
            sim={false}
            // key={index}
            // index={index}
            sub={sub}
            addSub={addSub}
            removeSub={removeSub}
          />
        ))}
            </div> 
        </div>
    )
}

export default Community;