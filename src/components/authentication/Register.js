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

export default function Register(props) {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirm, setConfirm] = useState('');
  const [confirmError, setConfirmError] = useState(false);
  const [checkInput, setCheckInput] = useState(false);
  const [checkInputError, setCheckInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    switch (evt.target.name) {
      case 'usernameInput':
        setUsername(value);
        setUsernameError(false);
        break;
      case 'emailInput':
        setEmail(value);
        setEmailError(false);
        break;
      case 'passwordInput':
        setPassword(value)
        setConfirmError(false);
        setPasswordError(false);
        break;
      case 'confirmInput':
        setConfirm(value);
        setConfirmError(false);
        setPasswordError(false);
        break;
      case 'checkInput':
        setCheckInput(value);
        setCheckInputError(false);
        break;
      default:

    }
  }

  const handleForm = (evt) => {
    evt.preventDefault();

     var error= false
     if (username === '') {
       setUsernameError(true)
       setErrorMessage("This field is required")
       error = true
     }
     if (email === '') {
       setEmailError(true);
       setErrorMessage("This field is required")
       error = true
     }
     if (password === '') {
       setPasswordError(true);
       setErrorMessage("This field is required")
       error = true
     }
     if (confirm === '') {
       setConfirmError(true);
       setErrorMessage("This field is required")
       error = true
     }

    if(confirm !== password){
      setPasswordError(true);
      setConfirmError(true);
      setErrorMessage("Password and confirmation password do not match.")
      error = true
     }
     else if (!checkInput) {
       setCheckInputError(true);
       setErrorMessage("Please accept Terms and Conditions to continue.")
       error = true
     }
     if (!error) {
        props
        .onAuth("signUp", {username, password, email})
        .then(() => {
          return
        })
        .catch(() => {
          return;
        });
     }
  }

  return (
    <div className="container" style={{marginTop: '135px', maxWidth: '500px', padding: '10px', borderRadius: '20px 20px', backgroundColor:"white"}}>
    {/* <Card component="main" maxwidth='xs' spacing={24}>  */}
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                name="usernameInput"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={handleInputChange} 
                error={usernameError}
              />
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoComplete='off'
                name="passwordInput"
                label="Password"
                type="password"
                id="password"
                onChange={handleInputChange} 
                error={passwordError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmInput"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete='off'
                onChange={handleInputChange} 
                error={confirmError}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="checkInput" onChange={handleInputChange} value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
            {errorMessage && (
            <p style={{color: 'red'}}>{errorMessage}</p>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleForm}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick= {e => {props.onLogIn()}} >
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
          </Grid>
        </form>
      </div>
    {/* </Card> */}
  </div> 
  ); 
}
