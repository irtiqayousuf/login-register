import React from "react";
import Sidenav from "./sidenav";
import Box from '@mui/material/Box';
import Navbar from "./navbar";
import { Grid ,Paper,Button, TextField, Input} from "@mui/material";
import Stack from "@mui/material/Stack";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';

const useStyles= makeStyles((theme)=>({

    btn:{
      justifyContent:"center",
      alignItems:"center",
    },
  
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
        let plan  = e.target[0].value
        let website = e.target[1].value;
        let name = e.target[2].value;
        let phone = e.target[3].value;
        let email = e.target[4].value;
       
        
        let config = { 'headers' : { 'Content-Type' : 'application/json' } };
        axios.post("http://localhost:8080/saveCustomer",{ plan:plan, website: website, name:name,phone:phone,email:email }, config).then(resp => {
            console.log("res" ,resp.data);
            localStorage.setItem("customer",JSON.stringify(resp.data));
            setTimeout(()=>{
              history.push("/qrcode");
            },10)
         
      })
    }
   const paperStyle={padding :20,height:'95vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000",backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')`}
    const btnstyle={margin:'40px 0' }
    return(
        <>
          <Navbar />
        <Box height={60} paddingTop={20} >
     </Box> 
     <Box sx={{ display: 'flex' }}>
         <Sidenav/>
       
         <Paper elevation={24} style={paperStyle}  variant="outlined" >
                <Grid align='center'>
                    <h3>Share Your Details With Us</h3>
                </Grid>
                <form onSubmit={(e)=>{ formHandler(e) }}>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input  type='text' label='Plan' required placeholder='Basic' name='plan' value='Paid Plan' fullWidth />
                </Stack>
                  <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input  type='text' label='Website' required placeholder='URL of Website' name='website' fullWidth />
                <Input type='text' label='Name' required placeholder='Name of website owner' name='name' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input type='number' label='Phone' required placeholder='Contact Number' name='phone' fullWidth />
                <Input type='email' label='Email' required placeholder='Enter your working email' name='email' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input type='text' label='Business Type' required placeholder='Business Type' name='business-type' fullWidth />
                <Input type='text' label='StartUp' required placeholder='Business StartUp' name='business-startup' fullWidth />
                </Stack>
                
                <FormControl>
                <Stack spacing={2} direction="column" paddingBottom={5}>
                   <FormLabel id="demo-controlled-radio-buttons-group">How many otps do you want send per month?</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                    <FormControlLabel value="v1" control={<Radio />} label="0 to 200" />
                    <FormControlLabel value="v2" control={<Radio />} label="200 to 500" />
                       </RadioGroup>
                     
                </Stack>  
               </FormControl>
              
                <Stack spacing={1} direction="row" className={classes.btn}  >
                <Button type='submit' value='Submit' color='primary' variant="contained">Proceed</Button>
                <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/pricing')}} >Go Back</Button>
               
                </Stack>
                </form>
            </Paper>

    </Box>
       </>
    )
}