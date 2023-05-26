import React from 'react'
import { Grid,Paper, Avatar, TextField,Box, Button, Typography,Link } from '@mui/material'
import { FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import axios from "axios";
import { useState  } from "react";
import {useHistory} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';



const useStyles = makeStyles((theme) => ({
   appBar:{
       backgroundColor:"#fff",
   },
   log:{
      backgroundImage: `linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%),
      url('https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    height: "750px",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display:"flex",
    fontFamily: "Bebas Neue cursive",
    justifyContent:"left",
    alignItems:"left",
    color:"#fff",
    paddingTop:"150px",
    },
    here:{
      fontFamily: "Bebas Neue cursive",
      justifyContent:"right",
      paddingLeft:"150px",
      alignItems:"right",
      color:"#fff",
      fontSize:"4rem"
      },
     subtitle:{
        fontFamily: "Bebas Neue cursive",
        fontSize:"5rem",
        padding:"30px",
        paddingLeft:"5px",
        color:"black",
        paddingInline:"10px",
        background: "rgba(240, 240, 240, 0.3)",
        boxShadow:"5px 10px #bb0000"
        },
     txt:{
        padding:"20px",
     },
     glow:{
        fontWeight:"bold",
        textShadow: " 1px 1px 2px white;",
     }  
   
  }));

const Login=()=>{

    const history = useHistory();
    

    const formHandler = (e) => {
      e.preventDefault();
      console.log("line 72",e);
      let email = e.target[0].value;
      let password = e.target[2].value;
      let config = { 'headers' : { 'Content-Type' : 'application/json', 'Authorization' : "Bearer 12228492498479284917491498" } };
      axios.post("http://localhost:8080/AdminUser",{ email : email , password : password }, config).then(resp => {
          console.log("res" ,resp.data);
          let res = resp.data;
          if(!res.error && res.status === 200){
              // return <Redirect to="/" />;
              localStorage.setItem("admin",JSON.stringify(res.data));
             setTimeout(()=>{
               history.push("/adminDashboard");
             },100)
          }
          else{
              alert(res.message);
          }
  
      },(err) => {
  
      })
      
    }

    const classes = useStyles();
    const paperStyle={padding :30,height:'50vh',width:280, margin:"10px auto",  boxShadow:"5px 10px #bb0000"}
    const btnstyle={margin:'8px 0'}
    return(
<>
        <AppBar className={classes.appBar} position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        <VpnLockOutlinedIcon />
          </IconButton>
          <Typography variant="h5" color="white">
          AUTHENTICATION SYSTEM API
          </Typography>
         
        </Toolbar>
      </AppBar>
    
<Grid className={classes.log}>
       
<Box className={classes.here}>
         <Typography variant="h5" color="#bb0000" fontWeight="bold" className={classes.glow}>
         AUTHENTICATION SYSTEM API
          </Typography>
          <Typography variant="h2" color="white" fontWeight="bold" >
          Get Started
          <KeyboardArrowRightIcon fontSize="large" />
          </Typography>
    <Typography variant="h6" className={classes.subtitle}>We provide secure and more effective authentications
    </Typography>
</Box>
            <Paper elevation={10} style={paperStyle}>
            <form onSubmit={(e)=>{ formHandler(e) }} >
                <Grid align='center'>
                    <h2>Admin Sign In</h2>
                </Grid>
                <Stack spacing={3} direction="column">
                <TextField className={classes.txt} type='email' name="email" label='Email' required placeholder='Enter email' fullWidth />
                <TextField className={classes.txt} type='password' name="password" label='Password' required placeholder='Enter password'  fullWidth />
                </Stack>
                <FormControlLabel
                    control={
                    <Checkbox name="checkedB" color="primary"/>
                    }
                    label="Remember me"
                 />
                <Button type='submit' value="Submit" color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="/forgot" >
                        Forgot password?
                </Link>
                </Typography>
            </form>
            </Paper>
        </Grid>
        </>
    );
}

export default Login;
