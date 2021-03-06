import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import SwipeableTemporaryDrawer  from './Drawers'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
     
  },
  appBar:{
backgroundColor: ' #203040 !important',
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar className={classes.appBar} position="static"  >
        <Toolbar>
        <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
        
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}