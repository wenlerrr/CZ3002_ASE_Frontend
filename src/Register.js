import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

class Register extends Component {
   // Constructor
  constructor(props){
    super(props);

    this.state = {
      usernameInput: '',
      usernameInputError: false,
      emailInput: '',
      emailInputError: false,
      passwordInput: '',
      passwordInputError: false,
      confirmInput: '',
      confirmInputError: false,
      checkInput: false,
      checkInputError: false

    }
    // Binding function to `this`
    this.handleForm = this.handleForm.bind(this)

  }

  // Handle data on input change
  handleInputChange = (evt) => {
   const target = evt.target;
   const value = target.type === 'checkbox' ? target.checked : target.value;
   const name = target.name;
   console.log('Name: ',name,' value: ', value);
   this.setState({
     [name]: value
   });


   switch (name) {
     case 'usernameInput':
        this.setState({
          usernameInputError: false,
        })
      case 'emailInput':
       this.setState({
         emailInputError: false
       })
     case 'passwordInput':
      this.setState({
        confirmInputError: false,
        passwordInputError: false
      })
    case 'confirmInput':
     this.setState({
       confirmInputError: false,
       passwordInputError: false
     })
     case 'checkInput':
      this.setState({
        checkInputError: false
      })
       break;
     default:

   }
 }

  // Handle register form
  handleForm = (evt) => {
    evt.preventDefault();

     var error= false
     if (this.state.usernameInput === '') {
       this.setState({
         usernameInputError: true
       })
       error = true
     }
     if (this.state.emailInput === '') {
       this.setState({
         emailInputError: true
       })
       error = true
     }
     if (this.state.passwordInput === '') {
       this.setState({
         passwordInputError: true
       })
       error = true
     }
     if (this.state.confirmInput === '') {
       this.setState({
         confirmInputError: true
       })
       error = true
     }

     if (error) {
       this.props.showError("This field is required")
     }
     else if(this.state.confirmInput !== this.state.passwordInput){
       this.setState({
         passwordInputError: true,
         confirmInputError: true
       })
       this.props.showError("Password and confirmation password do not match.")
       error = true
     }
     else if (this.state.checkInput === false) {
       this.setState({
         checkInputError: true
       })
       this.props.showError("Please accept Terms and Conditions to continue.")
       error = true

     }
     if (!error) {
       this.props.register({
          email: this.state.emailInput,
          password: this.state.passwordInput,
          username: this.state.usernameInput
        })
     }
  }
   
   
   
    render() {
        const classes = useStyles();
        return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} >
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="fname"
                      name="usernameInput"
                      variant="outlined"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      autoFocus
                      onChange={this.handleInputChange} 
                      error={this.state.usernameInputError}
                    />
                  </Grid>
                  Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="emailInput"
                        autoComplete="email"
                        onChange={this.handleInputChange} 
                        error={this.state.emailInputError}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="passwordInput"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={this.handleInputChange} 
                      error={this.state.passwordInputError}
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
                      onChange={this.handleInputChange} 
                      error={this.state.confirmInputError  }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox name="checkInput" onChange={this.handleInputChange} value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleForm}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            </Container>
        )
    }

}
export default Register;
