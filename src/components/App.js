import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NONAME } from 'dns';
import Layout from './Layout';
import Logo from '../images/birdseye-logo.png';

// TODO: FIX THE SKEW CLIP PATH

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paperWrapper: {
    zIndex: 2,
  },
  paper: {
    margin: '3rem 5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerWrapper: {
    margin: '3rem 5rem',
    '& img': {
      marginBottom: '2rem',
      width: '100px',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    color: theme.palette.common.black,
    marginTop: '1rem',
  },
  artwork: {
    backgroundColor: '#031c7f',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
  },
  skew: {
    height: '75vh',
    width: '100%',
    clipPath: 'polygon(5% 73%, 100% 0, 100% 100%, 0% 100%)',
    backgroundColor: '#443cb2',
  },
  yellowDot: {
    height: '120px',
    width: '120px',
    borderRadius: '240%',
    left: '60%',
    bottom: '-2%',
    position: 'absolute',
    background: `linear-gradient(170deg, #f5b54c 30%, #fbe64d)`,
  },
  lightPurpDot: {
    height: '300px',
    width: '300px',
    borderRadius: '600%',
    left: '80%',
    top: '-1%',
    position: 'absolute',
    background: `rgba(113, 96, 246, .8)`,
  },
  darkPurpDot: {
    height: '200px',
    width: '200px',
    borderRadius: '200%',
    left: '-4%',
    top: '45%',
    position: 'absolute',
    background: `#071461`,
    overflow: 'none',
    zIndex: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container component="main" className={classes.root}>
        <Grid
          item
          xs={12}
          sm={5}
          component={Paper}
          elevation={6}
          className={classes.paperWrapper}
          square
        >
          <div className={classes.headerWrapper}>
            <img src={Logo} alt="Birdseye Logo" />
            <Typography component="h1" variant="h4">
              Welcome to Birdseye!
            </Typography>
          </div>

          <div className={classes.paper}>
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                className={classes.button}
              >
                Create An Account
              </Button>
              <Link>FORGOT PASSWORD</Link>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} className={classes.artwork}>
          <div className={classes.skew}></div>
          <div className={classes.yellowDot}></div>
          <div className={classes.lightPurpDot}></div>
          <div className={classes.darkPurpDot}></div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default App;
