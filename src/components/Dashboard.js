import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Layout from './Layout';
import Logo from '../images/birdseye-logo.png';
import Magnify from '../images/magnify.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  taskList: {
    height: '100vh',
    padding: '2rem',
  },
  topLogo: {
    width: '50px',
    margin: '1.5rem 1rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      height: '25px',
      marginTop: '5px',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={4}
          className={classes.taskList}
          component={Paper}
          elevation={6}
        >
          <Typography component="h2" variant="h4" color="primary">
            Tasks
          </Typography>
          <Tabs>
            <Tab label="All" />
            <Tab label="Projects" />
          </Tabs>
        </Grid>
        <Grid item xs={8}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <img src={Logo} className={classes.topLogo} alt="Birdseye Logo" />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <img src={Magnify} alt="Searchicon" />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'Search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
