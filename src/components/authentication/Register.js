import React, { useState } from 'react';
import {makeStyles,Container,Paper,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Grid,Typography} from '@material-ui/core';
import Poster from '../../images/Poster.png'


const useStyles = makeStyles(theme => ({
  root: {
    height: '50vh',
  },
  main: {
    marginTop: '135px', 
    maxWidth: '400px', 
    padding: '10px',
    borderRadius: '20px 20px', 
    backgroundColor: 'white',
 },
   image:{
      width:'620px',
   } ,
    paper: {
      // marginTop: theme.spacing(10,4),
      marginTop:'50px',
      margin:'40px',
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
    // <div className="container" style={{marginTop: '135px', maxWidth: '500px', padding: '10px', borderRadius: '20px 20px', backgroundColor:"white"}}>
    // {/* <Card component="main" maxwidth='xs' spacing={24}>  */}
    //   <CssBaseline />
    <Container maxWidth="lg" height='lg'>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item xs={false} sm={3} md={6} > 
      <img className={classes.image} src={Poster} alt="Logo" /></Grid>
      {/* height="800" width='700' */}
      <Grid item xs={12} sm={9} md={6} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
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
            
            {errorMessage && (
            <p style={{color: 'red'}}>{errorMessage}</p>
          )}
          <Grid item xs={12} >
        <Typography variant="h6" gutterBottom>
        
        Upload a profile photo :
        <p></p><p></p><p></p>
        </Typography>
        {/* <FileUpload/> */}
        
        <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
       />
        <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" >
          Upload
        </Button>
        
        </label>
      </Grid>
      <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="checkInput" onChange={handleInputChange} value="allowExtraEmails" color="primary" />}
                label="Email me for exciting new updates!"
              />
            </Grid>
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
  {/*</div>  */}
  </Grid>
    </Grid>
    </Container>
  ); 
}
