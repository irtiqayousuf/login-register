// import React, { useState, useEffect } from 'react';
// import Sidenav from "./sidenav";
// import Navbar from "./navbar";
// import { useParams } from 'react-router-dom';
// import axios from "axios";
// import { makeStyles } from '@mui/styles';
// import { useHistory } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import TableRow from '@mui/material/TableRow';

// import {
//   Input,
//   FormControlLabel,
//   Box,
//   Stack,
//   Radio,
//   RadioGroup,
//   FormControl,
//   FormLabel,
//   Grid,
//   Paper,
//   Button,  
// } from '@mui/material';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import KeyIcon from '@mui/icons-material/Key';


// const useStyles= makeStyles((theme)=>({

//     btn:{
//       justifyContent:"center",
//       alignItems:"center",
//     },
  
// }));


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 20,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));

// export default function KeyDetails(){
//    const classes= useStyles();
 
//      const paperStyle={padding :20,height:'80vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
//       const btnstyle={margin:'40px 0' }
//       return(
//           <>
//             <Navbar />
//           <Box height={60} paddingTop={20} >
//        </Box> <Box sx={{ display: 'flex' }}>
//            <Sidenav/>
         
//            <Paper elevation={24} style={paperStyle}  variant="outlined" >
//                   <Grid align='center'>
//                       <h3>Your Key</h3>
//                   </Grid>



//                   <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 70 }} aria-label="customized table">
//         <TableBody>
//         <Stack spacing={2}>
//             <StyledTableRow >
//               <StyledTableCell align="left"> <KeyIcon color="success"/> <b> Key :</b> </StyledTableCell>
//             </StyledTableRow>
//             </Stack>
//         </TableBody>
//       </Table>
//     </TableContainer>
//                  </Paper>
  
//       </Box>
//          </>
//       )
//   }