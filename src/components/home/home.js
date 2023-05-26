import React from 'react';
import './home.css';
import { makeStyles } from '@mui/styles';
import { Grid,Paper, Avatar, TextField,Box, Button, Typography} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Typed from 'react-typed';
import Navbar from "../dashboard/navbar";
import { Carousel } from 'react-material-ui-carousel';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import SecurityIcon from '@mui/icons-material/Security';
import { Card, CardContent
 } from '@mui/material';
 import Stack from '@mui/material/Stack';
 import {useState, useEffect} from 'react';
 import axios from 'axios';
 import { useHistory } from 'react-router-dom';
 import { Link } from 'react-scroll';
 import { Container,Hidden } from "@mui/material";
//import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia} from './samecomponent';
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PermDeviceInformationIcon from "@mui/icons-material/PermDeviceInformation";
import ToysIcon from "@mui/icons-material/Toys";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Footer from './footer';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PhoneLockedIcon from '@mui/icons-material/PhoneLocked';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockIcon from '@mui/icons-material/Lock';
import SyncLockIcon from '@mui/icons-material/SyncLock';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%),
    url("https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.webp")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '70vh',
    paddingTop:'100px',
  },
  content: {
    paddingTop: "124px",
    maxWidth: 800,
    margin: 'auto',
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  abt:{
    color: '#bb0000',
    padding: '25px',
    textAlign: 'center',
  },
  abt2:{
    textAlign: 'center',
    color: '#bb0000',
    padding: '35px',
  },
  btn:{
    justifyContent:"right",
    alignItems:"right",
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'repeat',
    top: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px 20px',
  },
  menuItem: {
    cursor: 'pointer',
    margin: '0 10px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  section: {
    backgroundImage: `linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%),
    url("https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.webp")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '10vh',
    paddingTop:'5px',
  },
  sectionHeading: {
    color: theme.colors.base2,
    margin: theme.spacing(1, 0),
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
  },
  submitBtn: {
    backgroundColor: `linear-gradient(0deg, rgba(187,0,0,0.5998774509803921) 0%, rgba(48,58,46,0.6923144257703081) 100%)`,
    color: theme.colors.base2,
    "&:hover": {
      backgroundColor: theme.colors.primary1,
    },
  },
  sectionHeadingCont: {

    padding: theme.spacing(1),
    color: theme.colors.base2,
  },
  backk:{
    background: `linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(6,6,6,0.8379726890756303) 1%)`,
  },
  txt: {
    padding: "10px",
    marginTop :"4px",
},
cont:{
    color:"white",
}

}));


const menuItems = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Services', to: 'services' },
    { text: 'Contact', to: 'contact' },

  ];

const Blog = () => {
  const classes = useStyles();
  useEffect(()=>{
     getprice();
  },[])

  const history=useHistory();
  useEffect(()=>{
     getprice();
  },[])

  const [price, setPrice]= useState([]);
  const getprice = async () => {
     try {
         const res = await axios.get('http://localhost:8080/pricing')
         setPrice(res.data.url);
     }
     catch(error){
         alert(error.msg);
     }
  }



  const formHandler = (e) => {
    e.preventDefault();
    console.log("e",e);
    let email = e.target[0].value;
    let msg = e.target[1].value;
   
    
    let config = { 'headers' : { 'Content-Type' : 'application/json' } };
    const response = axios.post("http://localhost:8080/email",{ email:email,msg : msg });
    console.log("Response ",response);
  }
  const paperStyle = { padding: 30, height: '35vh', width: 400, margin: "25px auto",backgroundColor:"white" }
  const btnstyle = { margin: '8px 0' }
  return (
    <>
    <AppBar id="home" className={classes.appBar} position="static">
       <Box direction="row" sx={{paddingBlock:'8px' }}> 
    <Toolbar>
    <IconButton
        fontSyize="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <VpnLockOutlinedIcon />
      </IconButton>
      <Typography variant="h6" color="white" paddingRight={25} href="/">
      AUTHENTICATION SYSTEM API
      </Typography>
      <Stack spacing={4} direction="row" className={classes.btn} paddingRight={45} >
      {menuItems.map((menuItem) => (
    <Link className={classes.menuItem}
      to={menuItem.to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
    >
      {menuItem.text}
    </Link>
  ))}
   </Stack>
      {/* <Stack spacing={4} direction="row" className={classes.btn} paddingRight={40} >
        
                <Button type='submit'  color='primary' variant="contained"><Link to="/" activeClass='active'  className={classes.navlinks} spy={true} smooth={true} offset={-70} duration={500}
                    color='inherit'>Home</Link></Button>


                            <Button type='submit'  color='primary' variant="contained"><Link to="/about" activeClass='active'  className={classes.navlinks} spy={true} smooth={true} offset={-70} duration={500}
                    color='inherit'>About</Link></Button>

                            <Button type='submit'  color='primary' variant="contained" onClick={()=>{history.push('/register')}}>Services</Button>
                            <Button type='submit'  color='primary' variant="contained" onClick={()=>{history.push('/register')}}>Contact</Button>
                            </Stack> */}
                <Stack spacing={2} direction="row" className={classes.btn}  >
             
                <div class="dropdown">
  <button class="dropbtn">Login</button>
  <div class="dropdown-content">
    <a href="/login">User Login</a>
    <a href="/adminLogin">Admin Login</a>
  </div>
</div>

                 
                <Button type='submit'  color='primary' variant="contained" onClick={()=>{history.push('/register')}}>Register</Button>
                 
                </Stack>

  
    </Toolbar>
    </Box>
  </AppBar>
    <div id="home" className={classes.root} >
      <div className={classes.content}>
        
      <Stack spacing={4} direction='column' >
        <Typography variant="h2" > 
        <Typed
            strings={["Welcome To E-Auth "]}
            typeSpeed={150}
            backSpeed={50}
            loop
          /></Typography>
         
        <Typography variant="h5">
        Authenticity is a collection of choices that we have to make every day. It's about the choice to show up and be real.
               </Typography>
               </Stack>
      </div>
    </div>

    <div id="about" className={classes.abt}>
        <Typography variant="h3"><InfoIcon fontSize='large'/> About</Typography><br/>
        <Typography variant="h6" color='black'>
        E-Auth-Provider, a system where you
will be able to use our API’s to get the secure transaction mechanism & will be
able to login or making payments etc. You just need to Sign up in our system
then you can generate keys for API access and then you will get this API’s for
your websites, payment system, etc. You don’t need to care for security we will
provide you API which will provide OTP based login, once you
verify with our API, then we will send you an authentication token which will
verify the user is authenticated.
        </Typography>
     
        </div>  
        <div id="about">
             <Box padding={7}> 
              <Stack spacing={4} direction='row'>
              <GppGoodIcon  fontSize="large"/>  <Typography variant="body1" color='primary2'>
                      <b>Authentication</b><br/><br/>
                Our business is protecting yours.Our Commitment is Keeping you Safe. Our Concern is Security. Peace of mind is a matter of choice
                </Typography>
                <AdminPanelSettingsIcon  fontSize="large"/>  <Typography variant="body1" color='primary2'>
                <b>Authorization</b><br/><br/>
                In digital era, privacy must be a priority.Security used to be an inconvenience sometimes, but now it’s a necessity all the time.
                </Typography>
                </Stack><br/><br/>
                <Stack spacing={4} direction='row'>
                <LockIcon fontSize="large" />  <Typography variant="body1" color='primary2'>
                <b>Security</b><br/><br/>
                The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.
                </Typography>
                <Stack spacing={4} direction='row'>
                <SyncLockIcon fontSize="large" sx={{alignItems:"center",paddingLeft:8}}/> <Typography variant="body1" color='primary2'>
                <b>Privacy</b><br/><br/>
                It used to be expensive to make things public and cheap to make them private. Now it’s expensive to make things private and cheap to make them public.
                </Typography>
                </Stack>
                </Stack>
                </Box>
     </div>

    <div id="services" className={classes.abt2}>
        <Typography variant="h3"><MiscellaneousServicesIcon fontSize='large'/> Our Services</Typography><br/>
        <Typography variant="body1" paddingBottom={5} color="black">
        Our business is protecting yours. Our Commitment is Keeping you Safe. Our Concern is Security. Peace of mind is a matter of choice
        </Typography>
        <Grid container spacing={2}>
               <Grid item xs={8}>
               <Stack spacing={4} direction="row" paddingLeft={30}>
               { price.map((i) => (
               <Card key={i.id} sx={{ minWidth: 70 +"%" ,height:410, backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')`}}  className={classes.gradient}>
                <CardContent>
                    <Typography gutterBottom variant="h5" paddingBottom={3} component="div" sx={{color:"#bb0000"}}>
                    <SecurityIcon/> {i.title}
                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="#000000">
                     {i.subtitle}                    
                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="#000000">
                   {i.subtitle2}
                    </Typography>
                </CardContent> 
               </Card>
 ))}
            </Stack>  
         </Grid>
    </Grid>
    </div>
    <div id="contact" className={classes.abt}>
    <Box >
    <Typography variant="h3"><PhoneLockedIcon fontSize='large'/> Contact Us </Typography><br/>
        <Typography variant="body1" paddingBottom={3} color="black">
        We would love to hear from you. Contact us, our team is always ready to support and solve your issues.
        Our business is protecting yours.Our Concern is Security.
        </Typography>
        </Box>
    <Box className={classes.section}>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container spacing={15}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
              <Box padding={5} className={classes.cont} paddingTop={7}> 
              <Stack spacing={1} direction='column'>
              <Typography variant="h6">
              <PhoneLockedIcon />  <b>Contact :  </b> 9494949494 / 9494949494<br/>
        </Typography><br/>
        <Typography variant="h6">
        <MarkEmailReadIcon/> <b>Email :  </b>abcdfeeh@gmail.com / hsytrf@gmail.com<br/>
        </Typography><br/>
        <Typography variant="h6">
        <HomeIcon/>  <b>Address :  </b> C. Lane, Highway, Srinagar 190010<br/>
        </Typography><br/>
        </Stack><br/><br/>
        <Stack spacing={2} direction='row' href="#">
      <TwitterIcon /> <FacebookIcon/> <InstagramIcon/> <SubscriptionsIcon/>
      </Stack>
        </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
             <Paper elevation={10} style={paperStyle}>
                <Grid align='center' color='#bb0000'>
               <Typography variant="h5">
                    <Typed
            strings={["How Can We Help?"]}
            typeSpeed={150}
            backSpeed={50}
            loop
          /></Typography>
                                   </Grid>

              <form onSubmit={(e)=>{ formHandler(e) }}> 
              <Stack spacing={2} direction='column'>
              <TextField  className={classes.txt} type="text" label='Enter an Email'placeholder="Email" name='email' required  fullWidth />
                <textarea className={classes.txt} type="text" label='Send an email'placeholder="FEEDBACK" name='msg' required  fullWidth />
                <Button className={classes.txt}  type='submit' value='Submit' color='primary' variant="contained" style={btnstyle} fullWidth startIcon="">Send Feedback</Button>
                </Stack>
                </form> 
                
            </Paper>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
   
        </div>

   {/* <ArrowUpwardIcon href="/"/> */}
   <Footer/>
    </>
  );
};

export default Blog;


