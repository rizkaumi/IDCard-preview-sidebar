import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import useStyles from './Style'

function Greeting() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
             Welcome to ID Card creator!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            The purpose of this website is to create an ID card that displays personal information by filling out a form. Go to➝  
            <span><Link color="inherit" href="/main/form">
             Form page
            </Link>{' '}</span>
            to create ID Card
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
    
  );
}

export default Greeting;
