import React from "react";
import Sidenav from "./sidenav";
import Box from '@mui/material/Box';
import Navbar from "./navbar";
import { Grid ,Paper,Button, TextField, Input} from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";


export default function Customers(){
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
    

   const paperStyle={padding :20,height:'60vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #004d4d"}
    const btnstyle={margin:'40px 0'}
    return(
        <>
          <Navbar />
        <Box height={60} paddingTop={20} >
     //</Box> <Box sx={{ display: 'flex' }}>
         <Sidenav/>
       
         <Paper elevation={24} style={paperStyle}  variant="outlined" >
                <Grid align='center'>
                    <h3>Form for Website Owners</h3>
                </Grid>
                <form onSubmit={(e)=>{ formHandler(e) }}>
                  <Stack spacing={2} direction="column">
                <Input  type='text' label='Website'required placeholder='URL of Website' name='website' fullWidth />
                <Input type='text' label='Name' required placeholder='Name of website owner' name='name' fullWidth />
                <Input type='number' label='Phone' required placeholder='Contact Number' name='phone' fullWidth />
                <Input type='text' label='Plan' required placeholder='Enter your plan' name='plan' fullWidth />
                <Button type='submit' value='Submit' color='primary' variant="contained" style={btnstyle} fullWidth>Proceed</Button>
               
                </Stack>
                </form>
            </Paper>

    </Box>
       </>
    )
}