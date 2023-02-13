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

const useStyles= makeStyles((theme)=>({

    btn:{
      justifyContent:"center",
      alignItems:"center",
    },
  
}));


export default function Standard(){

  const classes= useStyles();
  const [value, setValue] = React.useState('v1');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const formHandler = (e) => {
        e.preventDefault();
        console.log("e",e);
        let website = e.target[0].value;
        let name = e.target[1].value;
        let phone = e.target[2].value;
        let plan = e.target[3].value;
        
        let config = { 'headers' : { 'Content-Type' : 'application/json' } };
        const response = axios.post("http://localhost:8080/saveCustomer",{ website : website, name : name , phone : phone, plan: plan });
        console.log("Response ",response);
      }
    

   const paperStyle={padding :20,height:'70vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #004d4d"}
    const btnstyle={margin:'40px 0' }
    return(
        <>
          <Navbar />
        <Box height={60} paddingTop={20} >
     //</Box> <Box sx={{ display: 'flex' }}>
         <Sidenav/>
       
         <Paper elevation={24} style={paperStyle}  variant="outlined" >
                <Grid align='center'>
                    <h3>Standard Form For Website Owners</h3>
                </Grid>
                <form onSubmit={(e)=>{ formHandler(e) }}>
                  <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input  type='text' label='Website'required placeholder='URL of Website' name='website' fullWidth />
                <Input type='text' label='Name' required placeholder='Name of website owner' name='name' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <Input type='number' label='Phone' required placeholder='Contact Number' name='phone' fullWidth />
                <Input type='text' label='Plan' required placeholder='Enter your plan' name='plan' fullWidth />
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
                    <FormControlLabel value="v1" control={<Radio />} label="0 to 100,000" />
                    <FormControlLabel value="v2" control={<Radio />} label="100,000 to 700,000" />
                       </RadioGroup>
                     
                </Stack>  
               </FormControl>
              
                <Stack spacing={1} direction="row" className={classes.btn}  >
                <Button type='submit' value='Submit' color='primary' variant="contained"   >Proceed</Button>
               
                </Stack>
                </form>
            </Paper>

    </Box>
       </>
    )
}