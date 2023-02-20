import React from "react";
import AdminSidenav from "./adminsidenav";
import Box from '@mui/material/Box';
import AdminNavbar from "./adminnavbar";
import { Grid ,Paper,Button, TextField, Input,Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const useStyles= makeStyles((theme)=>({
    log: {
        backgroundImage: `linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%),
      url('https://img.freepik.com/premium-vector/cyber-security-concept-with-tech-elements_23-2148530635.jpg?w=740')`,
        height: "790px",
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
    btn:{
      justifyContent:"center",
      alignItems:"center",
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
        color: "black",
        paddingInline: "10px",
        background: "rgba(240, 240, 240, 0.5)",
        boxShadow: "5px 10px #bb0000"
    },
    txt: {
        padding: "10px",
    },
    glow: {

        fontWeight:"bold",
        textShadow: " 1px 1px 2px white;",
    }
  
}));


export default function Basic(){
  const history=useHistory();
  const classes= useStyles();
  const [value, setValue] = React.useState('v1');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const formHandler = (e) => {
        e.preventDefault();
        console.log(e);
        let role  = e.target[0].value
        let name = e.target[1].value;
        let phone = e.target[2].value;
        let email = e.target[3].value;
        let password = e.target[4].value;
       
        
        let config = { 'headers' : { 'Content-Type' : 'application/json' } };
        const response = axios.post("http://localhost:8080/saveAdmin",{role:role, name : name, phone : phone , email : email, password: password,  });
        console.log("Response ",response.data);
         
             setTimeout(()=>{
               history.push("/admindashboard");
         
      })
    }
   const paperStyle={padding :20,height:'60vh',width:400, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
    const btnstyle={margin:'40px 0' }
    return(
        <>
          <AdminNavbar />
       
     <Box sx={{ display: 'flex' }} className={classes.log}>
         <AdminSidenav/>
         
            <Box className={classes.here}>
            <Stack spacing={4} direction="row" paddingTop={5}>
                <Typography variant="h5" color="#bb0000" fontWeight="bold" className={classes.glow}>
                   Register As System Admin
                </Typography>
                </Stack>
                <Box>Get Started<KeyboardArrowRightIcon fontSize="large" /></Box>
                <Typography variant="h6" className={classes.subtitle}>Authenticity is a collection of choices<br/> that we have to make every day.<br/> It's about the choice to show up and be real.
                </Typography>
            </Box>
         <Paper elevation={24} style={paperStyle}  variant="outlined" >
                <Grid align='center'>
                    <h3>Share your details and become <br/>SYSTEM ADMIN</h3>
                </Grid>
                
                <form onSubmit={(e)=>{ formHandler(e) }}>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input  type='text' label='Plan' required placeholder='ADMIN' name='admin' value='Admin' fullWidth />
                </Stack>
                  <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input  type='text' label='Name' required placeholder='Name' name='name' fullWidth />
                <Input type='number' label='Phone' required placeholder='Phone' name='phone' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input type='email' label='Email' required placeholder='Email' name='email' fullWidth />
                <Input type='password' label='Password' required placeholder='Password' name='password' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input type='text' label='Business Type' required placeholder='Business Type' name='business-type' fullWidth />
                <Input type='text' label='StartUp' required placeholder='Business StartUp' name='business-startup' fullWidth />
                </Stack>
                
            
              
                <Stack spacing={2} direction="row" className={classes.btn}  >
                <Button type='submit' value='Submit' color='primary' variant="contained">Submit</Button>
                <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/admindashboard')}} >Cancel</Button>
               
                </Stack>
                </form>
            </Paper>

    </Box>
       </>
    )
}