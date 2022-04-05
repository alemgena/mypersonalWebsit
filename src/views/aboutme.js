import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import ButtonBase from '@material-ui/core/ButtonBase'
import WebIcon from '@material-ui/icons/WebOutlined'
import MonochromePhotosOutlined from '@material-ui/icons/MonochromePhotosOutlined'
import AdbIcon from '@material-ui/icons/AdbOutlined'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Dividers from '../components/Dividers'
import { PrettoSlider } from '../components/SliderTool'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    fontWeight: 'fontWeightBold',
    fontSize: '24px',
  },
  button: {
    margin: theme.spacing(1),
    padding: '43px',
    fontSize: '72px',
    '&:hover': {
      background: '#3f51b5',
      color: 'white',
    },
  },
  head: {
    fontSize: '64px',
    variant: 'h2',
  },
}))

export default function NestedGrid() {
  const classes = useStyles()

  function WebIcons(props) {
    return (
      <WebIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </WebIcon>
    )
  }

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <Typography variant="h5" color="textSecondary" component="p">
              You can know who i am and what is my Hobbies. I hope it will help
              you for our Friendshiop.
            </Typography>
          </Box>

          <Box className={classes.paper}>
            <Typography variant="body1" component="p">
              Web application developer, specializing in JavaScript,
              HTML5,Bootstrap, CSS3 ,SASS(SCSS). Experienced with all stages of
              the development cycle for dynamic web projects. Well-versed in
              numerous programming languages and frameworks including Angular,
              ReactJs, NextJs, and various open source web technologies. in
              addition to this am experienced with NodeJs,express ,sqeulize
              ,GraphQl . For data base I am experienced in MongoDB ,MySQL,oracle
              . Generally am well experienced in full stack wed application
              developer .
            </Typography>
          </Box>
          <Box className={classes.paper}>
            <Dividers></Dividers>
          </Box>
        </Grid>
      </React.Fragment>
    )
  }
  function FormRowTwo() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <Box className={classes.paper}>
            <Box>
              <Typography variant="h3" color="primary" component="p">
                MY SKILLS
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary" component="p">
                Front end development
              </Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
              ></PrettoSlider>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary" component="p">
                Programin Language
              </Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
              ></PrettoSlider>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                Back end development
              </Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
              ></PrettoSlider>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                Database design
              </Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
              ></PrettoSlider>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                React js,Next JS , Angular{' '}
              </Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
              ></PrettoSlider>
            </Box>
            <Box>
              <Typography variant="h6" color="textSecondary" component="p">
                Node js,Sequlize , graphQl{' '}
              </Typography>
              <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={100}
              ></PrettoSlider>
            </Box>
          </Box>

          <Box className={classes.paper}>
            <Box>
              <Typography variant="h4" color="primary" component="p">
                WHAT CAN I DO{' '}
              </Typography>
            </Box>
            <ButtonBase>
              <WebIcons className={classes.button} color="primary">
                {' '}
              </WebIcons>
            </ButtonBase>
            <ButtonBase>
              <MonochromePhotosOutlined
                className={classes.button}
                color="primary"
              >
                {' '}
              </MonochromePhotosOutlined>
            </ButtonBase>
            <ButtonBase>
              <AdbIcon className={classes.button} color="primary">
                {' '}
              </AdbIcon>
            </ButtonBase>
          </Box>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid container item xs={12}>
          <Box fontWeight="fontWeightLight" m={1}>
            <Typography className={classes.head} color="primary" component="p">
              ABOUT ME
            </Typography>{' '}
          </Box>
        </Grid>

        <Grid container item xs={6} sm={6} spacing={2}>
          <FormRow />
        </Grid>

        <Grid container item direction="row" xs={6} sm={6} spacing={2}>
          <FormRowTwo />
        </Grid>
      </Grid>
    </div>
  )
}
