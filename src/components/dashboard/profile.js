import React, { useState, useEffect } from 'react';
import Sidenav from "./sidenav";
import Box from '@mui/material/Box';
import Navbar from "./navbar";
import { makeStyles } from '@mui/styles';
import { Grid ,Paper,Button, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useParams } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

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
  

function Profile() {
    const history=useHistory();
    const {id}= useParams();
    const classes= useStyles();
    const [userProfile, setProfile] = useState({});
    const paperStyle={padding :20,height:'65vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
    const btnstyle={margin:'40px 0' }
   // const id= localStorage.getItem('_id');
    const name = JSON.parse(localStorage.getItem('user'));
    console.log(name._id);
  useEffect(() => {
    
    fetch(`http://localhost:8080/user/profile/${name._id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
     <Navbar />
       <Box sx={{ display: 'cover',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }}  paddingTop={20}>
         <Sidenav/>
       
         <Paper elevation={24} style={paperStyle}  variant="outlined" className={classes.tbl} >
                <Grid align='center'>
                     <Typography variant='h6' color={"#bb0000"}><AdminPanelSettingsIcon />User Profile Details</Typography>
                </Grid>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 70 ,marginTop: 2}} aria-label="customized table">
        <TableBody>
        <Stack spacing={2}>
            <StyledTableRow >
              <StyledTableCell align="left"> <PersonIcon color="primary"/> <b> Name :</b>  {userProfile.name}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell align="left"> <EmailIcon color="primary" /> <b> Email :</b> {userProfile.email}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell align="left"> <PermPhoneMsgIcon color="primary"/> <b> Phone :</b> {userProfile.phone}</StyledTableCell>
            </StyledTableRow>
            </Stack>
        </TableBody>
      </Table>
    </TableContainer>
    <Stack spacing={1} direction="row" className={classes.btn} paddingTop={4} >
                <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/pricing')}} >Change Password</Button>
                <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/dashboard')}} >Back</Button>
                </Stack>
            </Paper>

    </Box>
   
    </>
  );
}

export default Profile;