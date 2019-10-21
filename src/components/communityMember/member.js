import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  profile: {
    height: 80,
    width: 80,
    alignLeft: 30
  },
  main: {
    display: "flex",
    height: 120,
    width: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    paddingTop: 50
  }
}));

export default function Member(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Avatar className={classes.profile} src={props.people}></Avatar>
      <Typography className={classes.name} variant="h6">
        {props.name}
      </Typography>
    </div>
  );
}
