import React from "react";
import { makeStyles } from '@mui/styles';
import AdminNavbar from "./adminnavbar";
import AdminSidenav from "./adminsidenav";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { styled } from '@mui/material/styles';

import {
    TableContainer,
    Table,
    TableHead, 
    TableRow,
    TableCell,
    tableCellClasses,
    Input,
    Box,
    Stack,
    Paper,
    TableBody,  
  } from '@mui/material';

   const useStyles= makeStyles((theme)=>({
    log: {
        backgroundImage: ` 
      url('https://t3.ftcdn.net/jpg/03/55/60/70/240_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')`,
        height: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        color:"white"
    },
    boxtbl: {
        fontFamily: "Bebas Neue cursive",
        justifyContent: "center",
        paddingTop: "80px",
        paddingLeft: "200px",
        paddingRight: "200px",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        width:"1100px",
    },
    body:{
        paddingTop:"2px",
        paddingLeft:"5px",
        paddingright:"5px",
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


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#bb0000",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
export default function SingleView() {
   const paperStyle={padding :20,height:'73vh',width:400, margin:"10px auto",  boxShadow:"5px 5px #bb0000",color:"#bb0000"}
   const [customer, setCustomer] = useState([]);
   const classes= useStyles();

   useEffect(() => {
    axios.get('http://localhost:8080/getCustomers')
      .then(res => setCustomer(res.data))
      .catch(err => console.error(err));
  }, []);

    return (
        <>
             <AdminNavbar />
        <Box height={10} paddingTop={10} >
      
     </Box> 
      
     <Box sx={{ display: 'cover' }} >
         <AdminSidenav/>
         <Box className={classes.boxtbl}>
         <TableContainer component={Paper} className={classes.log}>
         <Table sx={{ minWidth: 100, }} aria-label="customized table" >
         <TableHead>
         <TableRow >
              <StyledTableCell align="center" >User Details</StyledTableCell>
              </TableRow>
         </TableHead>
         <TableBody>
         <Stack direction="row"paddingLeft={5} paddingRight={5} paddingTop={2}>
                <Input  type='text' label='Plan' required placeholder='Basic' name='plan' fullWidth>{customer.plan}</Input>
                </Stack>
                <Stack spacing={4} direction="row" paddingLeft={5} paddingRight={5} paddingTop={2} >
                <Input  type='text' label='Website' required placeholder='URL of Website' name='website' fullWidth >{customer.name}</Input>
                <Input type='text' label='Name' required placeholder='Name of website owner' name='name' fullWidth >{customer.website}</Input>
                </Stack>
                <Stack spacing={4} direction="row" paddingLeft={5} paddingRight={5} paddingTop={2}  paddingBottom={5} >
                <Input type='number' label='Phone' required placeholder='Contact Number' name='phone' fullWidth >{customer.phone}</Input>
                <Input type='email' label='Email' required placeholder='Enter your working email' name='email' fullWidth >{customer.phone}</Input>
                </Stack>
                {/* <Stack spacing={4} direction="row" paddingLeft={5} paddingRight={5} paddingTop={2} paddingBottom={5}>
                <Input type='text' label='Business Type' required placeholder='Business Type' name='business-type' fullWidth />
                <Input type='text' label='StartUp' required placeholder='Business StartUp' name='business-startup' fullWidth />
                </Stack> */}
         </TableBody>




         </Table>


         </TableContainer>
         </Box>
         {/* <Paper elevation={24} style={paperStyle}  variant="outlined" >
                <Grid align='center'>
                    <h3>Share Your Details With Us</h3>
                </Grid>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <TextField  type='text' label='Plan' required placeholder='Basic' name='plan' value={customer.plan} fullWidth />
                </Stack>
                  <Stack spacing={4} direction="row" paddingBottom={5}>
                <TextField  type='text' label='Website' required placeholder='URL of Website' name='website' fullWidth />
                <TextField type='text' label='Name' required placeholder='Name of website owner' name='name' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <TextField type='number' label='Phone' required placeholder='Contact Number' name='phone' fullWidth />
                <TextField type='email' label='Email' required placeholder='Enter your working email' name='email' fullWidth />
                </Stack>
                <Stack spacing={4} direction="row" paddingBottom={5}>
                <TextField type='text' label='Business Type' required placeholder='Business Type' name='business-type' fullWidth />
                <TextField type='text' label='StartUp' required placeholder='Business StartUp' name='business-startup' fullWidth />
                </Stack>
                
                <FormControl>
                <Stack spacing={2} direction="column" paddingBottom={5}>
                   <FormLabel id="demo-controlled-radio-buttons-group">How many otps do you want send per month?</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value=""
                        onChange=""
                      >
                    <FormControlLabel value="" control={<Radio />} label="0 to 100,000" />
                    <FormControlLabel value="" control={<Radio />} label="100,000 to 700,000" />
                       </RadioGroup>
                     
                </Stack>  
               </FormControl>
              
                <Stack spacing={1} direction="row" className={classes.btn}  >
                {/* <Button type='submit' value='Submit' color='primary' variant="contained">Proceed</Button> */}
                {/* <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/pricing')}} >Go Back</Button> */}
               
                {/* </Stack>
                
            </Paper> */} 





        </Box>
      
        </>
        )
}