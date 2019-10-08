import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import OTPInput, { ResendOTP } from "otp-input-react";

const useStyles = makeStyles(theme => ({
    
  main: {
    marginTop: '135px', 
    maxWidth: '400px', 
    padding: '10px',
    borderRadius: '20px 20px', 
    backgroundColor: 'white',
 },
    
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

export default function VerifyEmail(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
    

  const handleInputChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    switch (evt.target.name) { 
      case 'emailInput':
        setEmail(value);
        setEmailError(false);
        break;
      default:

    }
  }

  const handleForm = (evt) => {
    evt.preventDefault();
     var error= false
     if (email === '') {
       setEmailError(true);
       setErrorMessage("This field is required")
       error = true
     }
  }

  return (
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
            <Typography> Please enter your email address so we can send you a pin.</Typography>
            </Grid>
    
            <Grid item xs={12}>
              <TextField
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete='off'
                  id="email"
                  label="Email Address"
                  name="emailInput"
                  onChange={handleInputChange} 
                  error={emailError}
              />
            </Grid>
            {errorMessage && (
            <p style={{color: 'red'}}>{errorMessage}</p>
          )}
          <Grid item xs={6} >
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {props.setPinObtained()}}
            >
                Send Pin
            </Button>
            </Grid>
            <Grid item xs={6} >
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Back
            </Button>
            </Grid>
            
          </Grid>
        </form>
      </div>
    {/* </Card> */}
  </div> 
  ); 
}
