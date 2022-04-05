import React from "react";
import "./index.css";
import {Grid,Box ,Typography} from '@material-ui/core'
import Fade from 'react-reveal/Fade';
export default function  BackgroundImagePage() {
  return (<div className="bg" >
     <Fade right>
      <div  className ="centered">
        
      <Grid  
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
          <Grid >
        
                <Box >      
                     <Typography style={{marginTop:"80px"}}   variant="h1"  component="p" >
                      Full Stack Developer
                    </Typography>
            </Box>
               
           </Grid>
        </Grid>
       
            </div> 
    </Fade>
  </div>
     )
};
