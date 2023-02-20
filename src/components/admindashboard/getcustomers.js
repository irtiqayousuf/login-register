import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminNavbar from './adminnavbar';
import AdminSidenav from './adminsidenav';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Link } from '@mui/material';
import Stack from "@mui/material/Stack";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AdjustIcon from '@mui/icons-material/Adjust';

const useStyles = makeStyles((theme) => ({
  appBar: {
      background: '#fff'
  },
  log: {
      backgroundImage: ` linear-gradient(0deg, rgba(226,1,1,0.6643032212885154) 0%, rgba(48,58,46,0.7371323529411764) 100%),
    url('https://img.freepik.com/premium-vector/cyber-security-concept-with-tech-elements_23-2148530635.jpg?w=740')`,
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
      paddingLeft: "40px",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      width:"1300px",
  },
  txt: {
    fontFamily: "Bebas Neue cursive",
    fontSize: "14rem",
   
},

}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#bb0000",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    color: "white",
    fontWeight:"bold",
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



export default function CustomizedTables() {
  const [customer, setCustomer] = useState([]);
  const classes = useStyles();
    const paperStyle = { padding: 30, height: '60vh', width: 280, margin: "10px auto", boxShadow: "5px 10px #bb0000" }
    const btnstyle = { margin: '8px 0' }


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
    <Stack spacing={4} direction="row" paddingBottom={2} >
   <Typography fontSize="30px" color="black">Customer Details:</Typography>
   </Stack>
    <TableContainer component={Paper} className={classes.log}>
      <Table sx={{ minWidth: 100, }} aria-label="customized table">
        <TableHead >
          <TableRow >
          <StyledTableCell align="center" ><AdjustIcon fontSize="small"/></StyledTableCell>
            <StyledTableCell align="center">Plan</StyledTableCell>
            <StyledTableCell align="center">Website</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map((customer) => (
            <StyledTableRow key={customer.name} >
              <StyledTableCell align="center" ><AdjustIcon fontSize="small"/></StyledTableCell>
              <StyledTableCell align="center" >{customer.plan}</StyledTableCell>
              <StyledTableCell align="center">{customer.website}</StyledTableCell>
              <StyledTableCell align="center">{customer.name}</StyledTableCell>
              <StyledTableCell align="center">{customer.phone}</StyledTableCell>
              <StyledTableCell align="center">{customer.email}</StyledTableCell>
              <StyledTableCell align="center"  sx={{ minWidth: 100, color:"white"}}><Link  sx={{ textDecoration:"none", color:"yellow"}}href="#">View</Link></StyledTableCell>
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Box>
  
    </>
  );
}



