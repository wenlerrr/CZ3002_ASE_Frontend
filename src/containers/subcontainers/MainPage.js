import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(30),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    // backgroundColor: 'rgba(0,0,0,.3)',
    backgroundColor: 'rgba(0,0,.2,.3)',
  },
  mainFeaturedPostContent: {
    // position: 'relative',
    align: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  exploreButton:{
    margin: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardGrid:{
      align: 'center',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 100,
  },
  avatar: {
    margin: 10,
    width: 120,
    height: 120,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));


const featuredPosts = [
    {
      image:'https://source.unsplash.com/user/erondu',
      title: 'Rob Boss',
      description:
        'Thanks to JioBook, I am able to find a community that loves drawing!',
    },
    {
        image:'https://source.unsplash.com/user/erondu',
        title: 'Joan Cena',
        description:
            'I think I am hotter than Wilbur.I think I am hotter than Wilbur.',
    },
    {
        image:'https://source.unsplash.com/user/erondu',
        title: 'Mary Lamb',
        description:
          "Such life changing app. Too sexy to resist. That's right",
      },
  ];


const posts = [];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

export default function MainPage(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent} align='center' >
                  <Typography component="h1" variant="h3" color="inherit" align='center' gutterBottom>
                    JioBook
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Find like-minded individuals, you'll never be alone again.
                  </Typography>
                  <Button className={classes.exploreButton}color="inherit" onClick={e =>{props.offStart()}}>
                        Explore More
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={4}>
                  <Card className={classes.card} align='center' justify='center'>
                    <div className={classes.cardDetails}>
                      <CardContent>
                      <Avatar alt="Image" 
                      src= {post.image} 
                      className={classes.avatar} />
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
              </Grid>
             
            ))} 
            
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                About JioBook
              </Typography>
              <Divider />
              {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))} */}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About Us
                </Typography>
                <Typography>
                  We are 6sigma we damn cool ohyeah.
                  Why am i coding this idk but it looks nice so 
                </Typography>
              </Paper>
              {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))} */}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Follow us on our social media!
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href="#" key={network}>
                  {network}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            I am just a footer, why do i need a footer? Oh just to make it look nice :)
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}