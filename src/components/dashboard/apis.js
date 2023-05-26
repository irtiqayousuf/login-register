import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import Sidenav from './sidenav';
import { Box } from '@mui/system';
import {AppBar, Button, TextField} from '@mui/material';
import Navbar from './navbar';
import { Paper} from "@mui/material";
import { Grid,Card, CardContent
 } from '@mui/material';
 import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';
 import { useHistory } from 'react-router-dom';
 import Accordion from '@mui/material/Accordion';
 import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
 const useStyles= makeStyles((theme)=>({
    gradient:{
        background:"#bb0000",
   
    },
    gradientLight:{
        background :"rgb(112, 195, 205)",
        background: "#eceff1"
    },
    iconStyle:{
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
        padding:'10px',
        marginBottom: "10px",
        borderRadius:'5px',
        fontSize:"25px",
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
      },
}));



export default function Api(){
     const classes= useStyles();
     const history=useHistory();
     const [token, setToken] = useState('');
     const [apiStatus, setApiStatus] = useState(null);
     const checkToken = (e) => {
      e.preventDefault();

      let config = { 'headers' : {
         'Content-Type' : 'application/json', 
         'Authorization' : "Bearer 12228492498479284917491498"
         } };

      axios.post("http://localhost:8080/checkToken",{ token : token }, config).then(resp => {
          console.log("res" ,resp.data);     
          setApiStatus(resp.status); // Set the API response status     
           if(resp.status === 200){ 
            setApiStatus(200);
            console.log("Token is valid");   
          }
          else{
            // console.log("Token is not valid");
            // Display an error message or take appropriate action
            alert('Token is not found or incorrect');          }
  
      },(err) => {
  
      })
    };



     const handleChange = (e) => {
      setToken(e.target.value);
    };
    const paperStyle={padding :20,height:'37vh', backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')`,width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
    return(
        <>
        <div className={classes.bgcolor}>
        <Navbar />
        <Box height={70}/>
         <Box sx={{ display: 'flex' }}>
             <Sidenav/>
        
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={2}>
               <Grid item xs={8}>
               <Stack spacing={1} direction="row" >
                                    <Card sx={{ minWidth: 37 + "%", height: 260, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
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
                                    <Card sx={{ minWidth: 37 + "%", height: 260, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
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
                                    <Card sx={{ minWidth: 37 + "%", height: 260, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
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
                                    <Card sx={{ minWidth: 37 + "%", height: 260, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
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
                                    <Card sx={{ minWidth: 146 + "%", height: 760,backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} className={classes.gradient}>
                                        <CardContent>
                                            <Box>
                                            <div color='red'>
                                                <AppBar position='static' variant='h1' className={classes.app}><b>Node.js Apis Using SMS</b></AppBar>
                                            </div>
                                            <Paper elevation={24} style={paperStyle}  variant="outlined" className={classes.tbl} >
                <Grid align='center'>
                    <Typography color={"#bb0000"} variant='h6' paddingBottom={3} >Enter Your Token </Typography>
                </Grid>
                <form
                 onSubmit={(e)=>{ checkToken(e) }}
                 >
      <Stack spacing={4}>
        <TextField
          component={Paper}
          align="left"
          sx={{ minWidth: 70 }}
          value={token}
          onChange={handleChange}
          label={
            <React.Fragment>
              <EmailIcon color="secondary" paddingLeft="2" />
              <b>Token:</b>
            </React.Fragment>
          }
        />
      </Stack>
      <Stack spacing={2} direction="row" paddingTop={4}>
        <Button type="submit" color="primary" variant="contained">
          Get API
        </Button>
      </Stack>             
               </form>
            </Paper>
            {apiStatus === 200 ? ( // Conditionally render the accordion based on the API response status
<div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{color:"#bb0000", fontWeight:"bold"}}>Api for receiving OTP</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{paddingBotton:"10px"}}>
        <Stack spacing={4} direction="row" >
        <Typography >
    https://localhost:8080/api/verify
    </Typography> 
      <CopyToClipboard text="https://localhost:8080/api/verify">
        
        <Button color='primary' variant="contained" sx={{ alignItems: "right" }} >Copy</Button>
      </CopyToClipboard>
</Stack>
</Box>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography  sx={{color:"#bb0000", fontWeight:"bold"}}>Api for verify OTP</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <Stack spacing={4} direction="row" paddingBotton="10px">
        <Typography >
    https://localhost:8080/comp-otp
    </Typography> 
      <CopyToClipboard text="https://localhost:8080/comp-otp">
        
        <Button color='primary' variant="contained" sx={{ alignItems: "right" }} >Copy</Button>
      </CopyToClipboard>
</Stack>
          
   
        </AccordionDetails>
      </Accordion>
      
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
            ):(  <Typography variant="body1" color="error">
            {apiStatus !== null ? "Token is not found or incorrect" : ""}
          </Typography>
        )}                                              
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
    )
}