import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline,AppBar,Toolbar,Paper,Stepper,Step,StepLabel,Button,Link,Typography} from '@material-ui/core';
import { flexbox } from '@material-ui/system';
import Review from './Review';
import CommunityDetailsForm from './CommunityDetailsForm';
import JioBook from '../../images/JioBook.png'
const useStyles = makeStyles(theme => ({
  main:{
    // backgroundImage: "url(" + JioBook + ")",
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
   
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    // width:flexbox,
   
    width:1000,
    height:1200,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    margin:theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    // backgroundImage: "url(" + JioBook + ")",
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    width:900,
    height:900,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Community details', 'Review'];

export default function CreateCommunity(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [info,setInfo]= useState({
    name: '',
    description: '',
    image:'',
    category:''
  });
  
  const getStepContent= step =>{
    switch (step) {
      case 0:
        return <CommunityDetailsForm info={info} setInfo={setInfo}/>;
      case 1:
        return <Review info={info} />;
      default:
        throw new Error('Unknown step');
    }
  };
  const handleNext = () => {
    //make sure all components are filled
    
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <div className={classes.main}>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={10}>
          <Typography component="h1" variant="h3" align="center">
            Create Community
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h4" gutterBottom>
                  Your community has been created!
                </Typography>
                <Typography variant="h6">
                 
                  Thank you for contributing to the JioBook community! :)
                </Typography>
                <Button className={classes.button}variant="contained"
                    color="primary">
                      Back to main 
                    </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Create' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        
      </main>
      </div>
    </React.Fragment>
  );
}