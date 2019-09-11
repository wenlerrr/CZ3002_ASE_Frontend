import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

export default function ForumWriteReply(props) {
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
             <Button  variant="contained" colour='primary'> Comment </Button>
        </ListItem>
    );
}