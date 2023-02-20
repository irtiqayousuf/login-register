import React, { useState, useEffect } from 'react';
import Sidenav from "./sidenav";
import Box from '@mui/material/Box';
import Navbar from "./navbar";
import { makeStyles } from '@mui/styles';
import { Grid ,Paper,Button} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

const useStyles= makeStyles((theme)=>({
    tbl:{
      justifyContent:"center",
      alignItems:"center",
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
      },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  export default function GetToken() {
  const history= useHistory();
  const classes= useStyles();
  const [useEmail, setEmail] = useState({});
  const [token, setToken] = useState({});
  const cus = JSON.parse(localStorage.getItem('customer'));
  console.log(cus._id);
  let email=cus.email;
     
   useEffect(() => {
      
      fetch(`http://localhost:8080/customer/getToken/${cus._id}`)
     .then(response => response.json())
     .then(data => setEmail(data))
     .catch(error => console.error(error));
   }, []);

         const generateToken = (e) => {
            e.preventDefault();
            console.log(e);  
          //let email = e.target[0].value;
             axios.post('http://localhost:8080/generateToken', { email })
               .then((response) => {
                 setToken(response.data.token);  
                 history.push('/msg') ;    
               })
               .catch((error) => {
                 console.error(error);
               });
   }
    const paperStyle={padding :20,height:'40vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
    const btnstyle={margin:'40px 0' }
     return (
    <>
     <Navbar />
        <Box height={50} paddingTop={20} >
       
     </Box> 
     <Box sx={{ display: 'cover' }} >
         <Sidenav/>
       
         <Paper elevation={24} style={paperStyle}  variant="outlined" className={classes.tbl} >
                <Grid align='center'>
                    <h2><AdminPanelSettingsIcon /> Logged In Customer Details</h2>
                </Grid>
                <form  onSubmit={(e)=>{ generateToken(e) }}>
           <TableContainer component={Paper}>
            <Table sx={{ minWidth: 70 }} aria-label="customized table">
        <TableBody>
         
        <Stack spacing={4}> 
            <StyledTableRow >
              <StyledTableCell align="left"> <EmailIcon color="secondary" /> <b> Email :</b> {useEmail.email}</StyledTableCell>
            </StyledTableRow>
           
            </Stack>
            
        </TableBody>
      </Table>
    </TableContainer>
    
             <Stack spacing={2} direction="row" paddingTop={4}> 
             
                <Button type='submit'  value="Submit" color='primary' variant="contained">Generate Token</Button>
                
                <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/dashboard')}} >Back</Button>
               </Stack>
               </form>
            </Paper>

    </Box>
   
    </>
  );
}