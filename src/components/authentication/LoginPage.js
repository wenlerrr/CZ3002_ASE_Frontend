import React, {useState} from 'react';
import {Button, CssBaseline, TextField, FormControlLabel, Checkbox,Paper,Container,Grid,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Poster from '../../images/Poster.png'
const useStyles = makeStyles(theme => ({
  root: {
    height: '50vh',
  },
  image: {
    //backgroundImage: 'url(https://source.unsplash.com/random)',
    // backgroundImage: 'url(/images/Poster.png)',
    // backgroundImage: 'url(${Poster})',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // margin: theme.spacing(0, 4),
    width:'620px',
  },
  paper: {
    margin: theme.spacing(10, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage(props) {
  const classes = useStyles();
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = e => {
    e.preventDefault();
    props
      .onAuth("login", {email, password})
      .then(() => {
        return;
      })
      .catch(() => {
        return;
      });
  }

  const handleChange = e => {
    if(e.target.name === "email") {
      setUsername(e.target.value)
    } else if (e.target.name === "password") {
      setPassword(e.target.value)
    }
  };

  return (
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
            
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              error={emailError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
            <Grid container justify="space-between">
              <Grid item>
                <Button onClick= {e => {props.onStart()}}>
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button onClick = {e => {props.onSignUp()}}>
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
                <Button onClick= {() => {props.onForgetPassword()}}>
                  Forgot password?
                </Button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    </Container>
  );
}