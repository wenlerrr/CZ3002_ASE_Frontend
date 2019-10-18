import React, { useState } from 'react';
import {Button,CssBaseline,TextField,Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
    

  const handleInputChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    switch (evt.target.name) { 
      case 'emailInput':
        props.setEmail(value);
        setEmailError(false);
        break;
      default:

    }
  }

  const handleForm = (evt) => {
    evt.preventDefault();
    var error= false
    if (props.getEmailValue() === '') {
      setEmailError(true);
      setErrorMessage("This field is required")
      error = true
    }
     props.setPinObtained()
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
                onClick={handleForm}
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
                onClick={() => {props.offForgetPassword()}}
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
