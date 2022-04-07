import React from "react";
import {Grid,Box,Link ,Typography,Tooltip} from '@material-ui/core'
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//https://t.me/alemgenateferi

import TelegramIcon from '@material-ui/icons/Telegram'
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  link:{
    fontSize:30
  }
});


export default function  Resume() {
    const classes = useStyles();
      const [hover,sethover]=React.useState(false);
    function FormRow() {
        return (
          <React.Fragment>


            <Grid item xs={12}  >
            
        <Box fontWeight="fontWeightLight" m={2} >
                <Typography variant="h5" color="primary" component="p" >
                EDUCATIONAL EXPERIENCES
                </Typography>
            </Box>  
    
      <Fade left>
        <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
        Bachelors Degree
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Wolkite University  / Dec 2016 - JAN 2021
        </Typography>
        <Typography variant="body2" component="p">
     I was graduated with BSC Degree in software engineering
from Wolkite University on January 16, 2021 with Cumulative of GPA 3.66

          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
            </Box> 
    </Fade>
    <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
        Higher Education

        </Typography>
        <Typography className={classes.pos} color="textSecondary">
    Wolkite University (2009-2013 E.C) CGPA:3.66

        </Typography>
     
      </CardContent>
    </Card>
            </Box> 
            </Fade>
              <Fade left>
            <Box  fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
     Preparatory School
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
  D/Elias Preparatory School (2007-2008 E.C)
Score:436
        </Typography>
      </CardContent>
    </Card>
            </Box> 
            </Fade>  
        </Grid>
          </React.Fragment>
        );
      }
      function FormRowTwo() {
        return (
          <React.Fragment>
            <Grid item xs={12}  >
            
        <Box fontWeight="fontWeightLight" m={2} >
                <Typography variant="h5" color="primary" component="p" >
                WORKING EXPERIENCES
                </Typography>
            </Box>  
    
            < Fade right>
    <Box   fontWeight="fontWeightLight" m={2} >
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
      Full Stack Developer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
   RCNDC (Jun 16-ON Present)

        </Typography>
        <Typography variant="body2" component="p">
       Front End
          <br />
    Reactjs and Next js

          <br />
          Back end

          <br />
         Nodejs ,Express ,Rest API , Sequlize,graphQl 

          <br />
          Database
              <br />
           Mongoes ,MysQl 

        </Typography>
           <Typography variant="h6" component="h2">
    My Previoues Work
        </Typography>
        <div style={{marginTop:"20px"}}>
          <Link href="http://ethiolive.net/" underline="none">
      EthioLive
      </Link>
      </div>
      <div style={{marginTop:"20px"}}>
         <Link href="http://infoethiopia.net/" underline="none">
      InfoEthiopia
      </Link>
      </div>
      <div style={{marginTop:"20px"}}>
       <Link href="http://kushlivestock.com/" underline="none">
      KushLiveStocke
      </Link>
      </div>
          <div style={{marginTop:"20px"}}>
       <Link href="http://erp.kushlivestock.com" underline="none">
      Kush Erp LiveStock
      </Link>
      </div>
      </CardContent>
    </Card>
        <Card className={classes.card}>
          <CardContent> 
            Social Links
            <div style={{marginTop:"20px"}}>
            <Link href="https://github.com/alemgena" className={classes.link} target="_blank"
             >
                <Tooltip title="GitHub">
       <GitHubIcon/>
    </Tooltip> 
  
</Link>
       <Link style={{marginLeft:"20px"}} href="https://linkedin.com/in/alemgena-teferi-373550230/" className={classes.link} target="_blank" >
    <Tooltip title='LinkedIn'>
    <LinkedInIcon/>
    </Tooltip>
</Link>
    <Link style={{marginLeft:"20px"}} href="https://t.me/alemgenateferi" className={classes.link} target="_blank" >
   <Tooltip title='Telegram'>
    <TelegramIcon/>
    </Tooltip>
</Link>

</div>
          </CardContent>
        </Card>
            </Box> 
            </Fade>   
        </Grid>
          </React.Fragment>
        );
      }

 
 return (<div  >
     <Fade right>
        
      <Grid  
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
          <Grid >
        
                <Box fontWeight="fontWeightLight" m={3} >      
                     <Typography   variant="h2"  component="p" color="primary" >
                           RESUME
                    </Typography>
                </Box>
                </Grid>
                <Grid>
                <Box fontWeight="fontWeightLight" m={4} >      
                <Typography variant="h6" color="textSecondary" component="p"  >
                You can know who i am and what is my Hobbies. 
                I hope it will help you for our Friendshiop.
                </Typography>
                </Box>
               
           </Grid>
        </Grid>
    </Fade>
    <Grid container spacing={6}>
        
      
       

        <Grid container item xs={6}  spacing={2}>
         
          <FormRow></FormRow>
        </Grid>
        
        
        <Grid  container item  xs={6} spacing={2}  >
         
         <FormRowTwo> </FormRowTwo>
          
        </Grid>
        
        
       
      </Grid>
  </div>
     )
};
