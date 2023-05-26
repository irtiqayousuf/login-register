import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useState, useEffect } from 'react';
import AdminSidenav from './adminsidenav';
import { Box } from '@mui/system';
import {AppBar, Button} from '@mui/material';
import AdminNavbar from './adminnavbar';
import { Grid,Card, CardContent, Paper,Link
 } from '@mui/material';
 import { useHistory } from 'react-router-dom';
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useParams } from 'react-router-dom';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';
import AdjustIcon from '@mui/icons-material/Adjust';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

 const useStyles= makeStyles((theme)=>({
    gradient:{
        background:"#bb0000",
   
    },
    gradientLight:{
        background :"rgb(112, 195, 205)",
        background: "#eceff1"
    },
    iconStyle: {
      marginTop: "0px",        
      color: "#bb0000",
  },
    bgcolor:{
        minHeight: "100vh",
        background: "#eceff1",
        background: "#eceff1",

    },
    home:{
        marginTop: "20px"
    },
    app:{
        backgroundColor:"#bb0000" ,
        color:"white",
        padding:'17px',
        borderRadius:'5px',
        fontSize:"25px",
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
      },
      tbl:{
        justifyContent:"center",
        alignItems:"center",
      },
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
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  


export default function AdminDashboard(){
     const classes= useStyles();
     const history=useHistory();

     const {id}= useParams();
     const [userProfile, setProfile] = useState({});
     const paperStyle={padding :20,height:'55vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
     const btnstyle={margin:'40px 0' }
    // const id= localStorage.getItem('_id');
 
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/getCustomers')
        .then(res => setCustomer(res.data))
        .catch(err => console.error(err));
    }, []);

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
      setSelectedDate(date);
      console.log("Date is: ", date);
    };
  
    return(
        <>
        <div className={classes.bgcolor}>
        <AdminNavbar />
        <Box height={70}/>
         <Box sx={{ display: 'flex' }}>
             <AdminSidenav/>
       
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={2}>
               <Grid item xs={8}>
               <Stack spacing={1} direction="row" >
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <FeedOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            Round The Clock Bulk SMS Delivery
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Send Transactional SMS 24/7 to update your clients 
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <BrowserUpdatedOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            100% Instant Bulk Sms Delivery
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Using our api, your clients would get 100% assured instant delivery within no time!
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <ShoppingBagOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            Easy to Use Bulk Sms Panel UI
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Our Easy to Use Api Panel would make a non-technical person to handle their Bulk sms campaign on his own. Its just a click and go.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <LocalMallOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            Generate Leads Using Bulk Sms Marketing
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Using our online Bulk sms marketing tool you would be able to generate a good business leads for your company.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
            <Stack spacing={1} className={classes.home}  direction="row">
                                    <Card sx={{ minWidth: 146 + "%", height: 450, background: "" }} className={classes.gradient}>
                                        <CardContent>
                                        <Box className={classes.boxtbl}>
    <Stack spacing={4} direction="row" paddingBottom={2} >
   <Typography fontSize="30px" color="#bb0000">Registered Customer</Typography>
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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
                                        </CardContent>

                                    </Card>
                                            </Stack>
         </Grid>
      
    </Grid>
    

         <Box height={20}/>
       <Grid container spacing={2} direction="row">
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
        </Grid> 
      </Grid>
       </Box>

    </Box>
    {/* <div>
        <Bottom/>
    </div> */}
    </div>
   
        </>
    );
}



