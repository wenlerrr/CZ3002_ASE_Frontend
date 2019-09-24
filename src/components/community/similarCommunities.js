import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Card,Typography,AppBar,Toolbar} from '@material-ui/core';
import CommunityCard from "../main/CommunityCard";

export default function SimilarCommunities(props) {
    
    return (
        //3 similar communities
        
        <Card size='sm'>
            
            <AppBar  position='relative' color="primary" >
          <Toolbar>
            <Typography  variant="h5" gutterBottom>
            Similar Communities
          </Typography>
          
          </Toolbar>
        </AppBar>
            
            <CommunityCard 
            image='https://source.unsplash.com/user/erondu'
            name='Hall 1'
           // description='Community Description'
            ></CommunityCard>
            <CommunityCard 
            image='https://source.unsplash.com/user/erondu'
            name='Hall  2'
           // description='Community Description'
            ></CommunityCard>
            <CommunityCard 
            image='https://source.unsplash.com/user/erondu'
            name='Hall 3'
            //description='Community Description'
            ></CommunityCard>

        </Card>
    );
}