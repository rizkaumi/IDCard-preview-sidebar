import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Style'

function Instruction() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
             The instructions below to process your ID Card
            </Typography>
            <Typography variant="p" align="left" color="textSecondary" paragraph>
            You may contact the Penguin Service Center at (330) 941-6000 for registration assistance, located on the second floor of Meshel Hall.
            </Typography>
            <Typography variant="h6" align="left" color="textPrimary" paragraph>
            1. Go to Form Page
            </Typography>
            <Typography variant="h6" align="left" color="textPrimary" paragraph>
            2. Fill in the form
            </Typography>
            <Typography variant="h6" align="left" color="textPrimary" paragraph>
            3. Click Submit
            </Typography>
            <Typography variant="h6" align="left" color="textPrimary" paragraph>
            4. Click Preview to see the ID Card
            </Typography>
            <Typography variant="h6" align="left" color="textPrimary" paragraph>
            5. Click Clear Form to clear the form
            </Typography>
            <Typography variant="h6" align="left" color="textPrimary" paragraph>
            6. Click Reset button to clear all ID Card
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
    
  );
}

export default Instruction;
