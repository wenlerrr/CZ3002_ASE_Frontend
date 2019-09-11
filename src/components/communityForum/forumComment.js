import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export default function ForumComment(props) {
    return (
        <ListItem >
        <ListItemAvatar>
            <Avatar alt="Profile Picture" src={props.userprofile} />
        </ListItemAvatar>
                <ListItemText primary={props.username} secondary={props.comment}/> 
        </ListItem>
    );
}