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
import JioBook from '../../images/JioBook.png'

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(30),

    backgroundImage: "url(" + JioBook + ")",
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
    // backgroundColor: 'rgba(0,0,.2,.3)',
  },
  mainFeaturedPostContent: {
    // position: 'relative',
    align: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 3,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  exploreButton:{
    // marginTop: theme.spacing(8),
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(35),
    padding: theme.spacing(3),
    align: 'center',
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
      image:'https://media.licdn.com/dms/image/C4D03AQE_qihydDjB8w/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=PKNisRKnmhHS50lphHhH9KHDsuwu9JBhX5fwCjug-FM',
      title: 'Amber Chong',
      description:
        ' Having not joined any camps before school started, JioBook was a lifesaver and enabled me to meet great friends nonetheless.' ,
    },
    {
        image:'https://media.licdn.com/dms/image/C5103AQEy274SIgkMoQ/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=yixvUu8NvwoI4izkCtwltC6L-VgOL5vNZ-Y8IReyxFo',
        title: 'Felix Tan',
        description:
            ' I didn’t know there were so many people interested in astrology too until I joined JioBook! What an eye-opener! ',
    },
    {
        image:'https://media.licdn.com/dms/image/C5103AQEIUXVDoBDOYA/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=VI41_FpCoECu4rozChJ3ceaVvYRqLvYlrEcCJmdabVA',
        title: 'Qin Da Lim',
        description:
          "JioBook is a must try! Thanks to the platform, I managed to find really good friends who I can trust and talk to on a regular basis!          ",
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
            
            <div className={classes.overlay} />
            <Grid container>
              <Grid item >
                  {/* <Typography component="h1" variant="h3" color="inherit" align='center' gutterBottom>
                    JioBook
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Find like-minded individuals, you'll never be alone again.
                  </Typography> */}
                  <Button className={classes.exploreButton} align='center'color="primary" variant='contained'
                  onClick={e =>{props.offStart()}}>
                  <Typography variant="h6">Explore More</Typography>
                  </Button>
                {/* </div> */}
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
                      // src='https://media.licdn.com/dms/image/C4D03AQE_qihydDjB8w/profile-displayphoto-shrink_800_800/0?e=1576713600&v=beta&t=PKNisRKnmhHS50lphHhH9KHDsuwu9JBhX5fwCjug-FM'
                      // src='https://randomuser.me/photos'
                      className={classes.avatar} />
                        <Typography component="h2" variant="h5">
                          <p></p>
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        <p></p>
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
              <Typography variant="h5" gutterBottom>
                About JioBook
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
              <p></p>
              Are you tired of spending your lunch breaks alone in your university? Are you eager to meet exciting new pals to share your passions and school struggles with? University doesn’t just have to be a ‘YOU’niversity, instead let it be a Utopia for you starting today!
              <p></p><p></p>
              By creating an account on JioBook, you will be able to search for communities that are of your interest area, view their pages, and join them to discover like-minded individuals. Our state-of-the-art algorithm will also recommend you communities you may be interested in based on the communities you have already joined and the people within them. The possibilities for social interaction and self-discovery are endless. 
              <p></p> <p></p>
              Wait no longer, and join JioBook to start discovering today!
              </Typography>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h5" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="h6">
                Here at 6 Sigma, we are committed to helping university students expand their social circles and lead a more fulfilling and enriching campus life. 
                <p></p> <p></p>
                Being students ourselves, we know the challenges of making new friends on campus, and that gave us the inspiration for coming up with JioBook. 
                <p></p> <p></p>
                It really warms our hearts to know that somewhere out there, people using our platform have benefited from it and are making connections that will hopefully last throughout their lifetime. 
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
          Team 6 Sigma, Copyright © 2019. All rights reserved.
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          For any enquiries, contact us at 6Sigma@JioBook.com.

          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}