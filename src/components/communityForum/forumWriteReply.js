import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import ForumComment from './forumComment'
export default function ForumWriteReply(props) {

    const handleClick = (evt) => {
        //add one comment 
        
    }

    return (
        <ListItem >
        <ListItemAvatar>
            <Avatar alt="Profile Picture" src={props.userprofile} />
        </ListItemAvatar>
            <TextField
                margin="dense"
                id="name"
                type="title"
                fullWidth
            />
             <Button  variant="contained" colour='primary' onClick={handleClick}> Comment </Button>
        </ListItem>
    );
}