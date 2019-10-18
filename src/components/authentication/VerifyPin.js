import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OTPInput, { ResendOTP } from "otp-input-react";
import {Button,Grid,Typography,CssBaseline} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', 
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
  
export default function VerifyPin(props) {
    const classes = useStyles();

    return(
        <div className="container" style={{marginTop: '135px', maxWidth: '500px', padding: '10px', borderRadius: '20px 20px', backgroundColor:"white"}}>
    {/* <Card component="main" maxwidth='xs' spacing={24}>  */}
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
        <Grid item xs={12}>
        <Typography> Please key in the recived PIN</Typography>
            </Grid>

        <Grid item xs={12} >
            <OTPInput
                value={props.getOTPValue()}
                onChange={props.setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                // secure
                />
            </Grid> 
            <p> </p>
            <Grid item xs={12}> 
          <Button
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={() => {props.onResetPassword()}}
          >
            Reset Password
          </Button>
          </Grid>
          </Grid>
        </form>
      </div>
    {/* </Card> */}
  </div> 
    );

}