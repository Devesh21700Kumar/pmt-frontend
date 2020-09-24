import React from 'react';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidenav from './Sidenav';
import Logo from './Logo';
import Topnav from './Topnav';
import DashboardIssueCard from './DashboardIssueCard';
import DashboardProjectCard from './DashboardProjectCard';
import Deadlines from './Deadlines';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: '#1b262c',
    },
    // necessary for content to be below app bar
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#1b262c',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    },
    sidePanels: {
      marginTop: '10%',
      marginBottom: '10%',
    },
    project: {
      position: 'relative',
      bottom: 0,
      width: '75vw',
    },
  })
);


const Projects = () => {
  const classes = useStyles();

  return (
    <div className={classes.project}>
      <DashboardProjectCard id={0} />
    </div>
  );
};

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Logo />
      <Topnav page='Home' index='1' />
      <div className={classes.sidePanels}>
        <Sidenav active='Dashboard' />
        <Deadlines />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <br />
        <br />
        <br />
        <Typography variant='h3' style={{color: 'white'}}>
            Issues
        </Typography>
        <DashboardIssueCard
          page='Home'
          title='@SameshGSOC assigned you issue #19'
        />
        <br />
        <br />
        <br />
        <Typography variant='h3' style={{color: 'white'}}>
            Projects
        </Typography>
        <Projects />
      </main>
    </div>
  );
};

export default Home;
