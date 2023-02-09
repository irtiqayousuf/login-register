import React from "react";
import axios from "axios";
import {
    AppBar,
    Toolbar,
    Input,
    FormControl,
    FormControlLabel,
    Box,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    Link,
    Checkbox
}
    from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { makeStyles } from '@mui/styles';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: '#fff'
    },
    log: {
        backgroundImage: `linear-gradient(90deg, rgba(0,77,77,0.7959558823529411) 0%, rgba(0,77,77,0.5018382352941176) 47%, rgba(0,77,77,0.3533788515406162) 100%),
      url('https://img.freepik.com/premium-vector/cyber-security-concept-with-tech-elements_23-2148530635.jpg?w=740')`,
        height: "750px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        fontFamily: "Bebas Neue cursive",
        justifyContent: "left",
        alignItems: "left",
        color: "#fff",
        paddingTop: "150px",
    },
    here: {
        fontFamily: "Bebas Neue cursive",
        justifyContent: "center",
        paddingLeft: "150px",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem"
    },
    subtitle: {
        fontFamily: "Bebas Neue cursive",
        fontSize: "5rem",
        padding: "30px",
        paddingLeft: "5px",
        color: "#004d4d",
        paddingInline: "10px",
        background: "rgba(240, 240, 240, 0.3)",
        boxShadow: "5px 10px #004d4d"
    },
    txt: {
        padding: "10px",
    },
    glow: {

        textShadow: " 5px 5px 5px white;",
    }

}));

const Register = () => {
    const formHandler = (e) => {
        e.preventDefault();
        console.log("e",e);
        let name = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[2].value;
        let phone = e.target[3].value;
        
        let config = { 'headers' : { 'Content-Type' : 'application/json' } };
        const response = axios.post("http://localhost:8080/createUser",{ name : name, email : email , password : password, phone: phone });
        console.log("Response ",response);
      }
    

    const classes = useStyles();
    const paperStyle = { padding: 30, height: '60vh', width: 280, margin: "10px auto", boxShadow: "5px 10px #004d4d" }
    const btnstyle = { margin: '8px 0' }
    return (<>
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="white">
                    E-AUTH-PROVIDER
                </Typography>
            </Toolbar>
        </AppBar>

        <Grid className={classes.log}>
            <Box className={classes.here}>
                <Typography variant="h5" color="#004d4d" className={classes.glow}>
                    E-AUTH-PROVIDER
                </Typography>
                <Box>Get Started<KeyboardArrowRightIcon fontSize="large" /></Box>
                <Typography variant="h6" className={classes.subtitle}>We provide secure and more effective authentications
                </Typography>
            </Box>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' color='#004d4d'>
                    <h2>Register</h2>
                </Grid>
              <form onSubmit={(e)=>{ formHandler(e) }}> 
                <Input className={classes.txt} type="text" label='Enter Name'placeholder="Name" name='name' required  fullWidth />
                <Input className={classes.txt} type='email' label='Enter Email' placeholder='Email' name='email' required  fullWidth />
                <Input className={classes.txt} type='password' label='Enter Password' placeholder='Password'name='password' required  fullWidth />
                <Input className={classes.txt} type="number" label='Enter Phone' placeholder="Phone" name='phone'  required  fullWidth />
                <FormControlLabel className={classes.txt} 
                    control={
                        <Checkbox name="checkedB" color="primary" />
                    }
                    label="Remember me"
                />
                <Button className={classes.txt}  type='submit' value='Submit' color='primary' variant="contained" style={btnstyle} fullWidth startIcon={<HowToRegIcon/>}>SIGN UP</Button>
                </form> 
                <Typography className={classes.txt}  >Already have an account?
                    <Link className={classes.txt}  href="/" >
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    </>
    );

}
export default Register;