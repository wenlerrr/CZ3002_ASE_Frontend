import React,{useState}from "react";
import {Grid} from '@material-ui/core'
import CommunityCard from "../../components/main/CommunityCard"
import SingleCommunityPage from '../../components/main/SingleCommunityPage'
const Community = props => {
    const [subList, setSubList] = useState([
        {
          name: "Community 1",
          description: "Community 1 that you subscribed to!",
          image:'https://source.unsplash.com/user/erondu',
          joined: true
        },
        {
            name: "Community 2",
            description: "Community 2 that you subscribed to!",
            image:'https://source.unsplash.com/user/erondu',
            joined: true
        },
        {
            name: "Community 3",
            description: "Community 3 that you subscribed to!",
            image:'https://source.unsplash.com/user/erondu',
            joined: true
        },
      ]);   
      
      const removeSub = index => {
        const newSubList = [...subList];
        newSubList.splice(index, 1);
        setSubList(newSubList);
      };

      const addSub = sub => {
        const newSubList = [...subList,{sub}];
        setSubList(newSubList);
      };

    return (
        <div className="container">
            <h1>HIIIIIII WLLLLLLLLLLL!</h1>
            <p>These are the communities you subscribed to!!!!</p>
            <div>
            {subList.map((sub, index) => (
          <CommunityCard
            sim={false}
            key={index}
            index={index}
            sub={sub}
            addSub={addSub}
            removeSub={removeSub}
          />
        ))}
            </div> 
            <div> <SingleCommunityPage> </SingleCommunityPage></div>
        </div>
    )
}

export default Community;