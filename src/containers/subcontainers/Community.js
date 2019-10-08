import React,{useState}from "react";
import {Grid} from '@material-ui/core'
import CommunityCard from "../../components/main/CommunityCard"
import SingleCommunityPage from './SingleCommunityPage'
const Community = props => {
    const [subList, setSubList] = useState([
        {
          _id:1,
          name: "Community 1",
          description: "Community 1 that you subscribed to!",
          image:'https://source.unsplash.com/user/erondu',
          joined: true
        },
        {
          _id:2,  
          name: "Community 2",
            description: "Community 2 that you subscribed to!",
            image:'https://source.unsplash.com/user/erondu',
            joined: true
        },
        {
          _id:3,   
          name: "Community 3",
            description: "Community 3 that you subscribed to!",
            image:'https://source.unsplash.com/user/erondu',
            joined: true
        },
      ]);   
      
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
            <p>These are the communities you subscribed to!!!!</p>
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
            {/* <div> <SingleCommunityPage> </SingleCommunityPage></div> */}
        </div>
    )
}

export default Community;