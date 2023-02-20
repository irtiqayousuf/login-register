import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
//import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: "bb0000",
        color:'white',
    paddingBottom:"20px",
        position: "relative",
      },
      iconButton: {
        position: "absolute",
        right: 5,
        top: -25,
        backgroundColor: "#bb0000",
        color: 'white',
      },

}))
export default function Footer() {
  const classes = useStyles();
  var date = new Date();
  return (
    <Box className={classes.footerContainer} id='Footer'>
      <IconButton
        className={classes.iconButton}
        // to='home'
        // activeClass='active'
        // spy={true}
        // smooth={true}
        // offset={-70}
        // duration={1200}
        // component={Link}
        >
       
      </IconButton>
      <Typography variant='body1' component='h4' align='center' backgroundColor="#bb0000" color='white'>
        Developed and designed by
        Irtiqa, Insha and Rasheeqa , All Right Reserved © {date.getFullYear()}
      </Typography>
    </Box>
  );
}