import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Sidenav from './sidenav';
import { Box } from '@mui/system';
import Navbar from './navbar';
import Button from '@mui/material/Button';
import SecurityIcon from '@mui/icons-material/Security';
import { Grid,Card, CardContent
 } from '@mui/material';

 const useStyles= makeStyles((theme)=>({
    gradient:{
        background:"#004d4d",
   
    },
    gradientLight:{
        background :"rgb(112, 195, 205)",
        background: "#eceff1"
    },
    iconStyle:{
        marginTop: "20px",
        marginLeft:"20px",
        color:"#fff",
    },
    bgcolor:{
        minHeight: "100vh",
        background: "#eceff1",
        background: "#eceff1",
    },
      here:{
       fontFamily: "Bebas Neue cursive",
       justifyContent:"right",
       paddingBotton:"150px",
       alignItems:"center",
       textAlign: "center",
       color:"#fff",
       fontSize:"4rem"
       },
      subtitle:{
         fontFamily: "Bebas Neue cursive",
         fontSize:"5rem",
         paddingBotton:"5px",
         color:"black",
         background: "rgba(240, 240, 240, 0.3)",
         },
      txt:{
         padding:"20px",
      },
      glow:{
         fontWeight:"bold",
         textShadow: " 3px 3px 4px pink;",
      },
      btn:{
        justifyContent:"center",
        alignItems:"center",
      },
      head:{
        justifyContent:"center",
        alignItems:"center",
      }
}));

   

export default function Dboard(){
     const classes= useStyles();

    return(
        <>
        <div className={classes.bgcolor}>
        <Navbar />
        
        <Box height={90} />
         <Box sx={{ display: 'flex' }}>
             <Sidenav/>
         <Box component="main" sx={{ flexGrow: 1, p:2}} spacing={1} >
         <Box className={classes.here}>
         <Stack spacing={3}direction="row" paddingBottom={1} className={classes.head}>
         <Typography variant="h5" color="#004d4d" fontWeight="bold" className={classes.glow}>
          PRICING PLAN
          </Typography>
          </Stack>
          <Stack spacing={3}direction="row" paddingBottom={1}  className={classes.head}>
          <Typography variant="h6" color="black" fontWeight="bold" >
          Get started at no cost,
          then pay as you go
          </Typography>
          </Stack>
          <Stack spacing={3}direction="row" paddingBottom={4}  className={classes.head}>
    <Typography variant="h6" className={classes.subtitle}>We provide Essential, Professional and Enterprise plans.
    </Typography>
    </Stack>
</Box>

    <Grid container spacing={2}>
               <Grid item xs={8}>
               <Stack spacing={4} direction="row">
               <Card sx={{ minWidth: 45 +"%" ,height:400,  background:"linear-gradient(0deg, rgba(0,77,26,0.6420693277310925) 0%, rgba(0,77,48,0.8101365546218487) 53%, rgba(0,26,77,0.6448704481792717) 100%)"}}  className={classes.gradient}>
                <CardContent>
                    <Typography gutterBottom variant="h5" paddingBottom={3} component="div" sx={{color:"#fff"}}>
                    <SecurityIcon/> Essential
                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="white">
                    The essential plan allows for unlimited social connections, custom domains, and user role management. You also get 2 more Actions.

                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="white">
                    Pricing starts at $23/month for 1,000 monthly active users and scales to $228/month for 10,000 users.
                    </Typography>
                </CardContent> 
                <Stack direction="row" spacing={1}  className={classes.btn}  >
      <Button  variant="contained" >Make Payment</Button>
    </Stack>
            </Card>

            <Card sx={{ minWidth: 45 +"%", height:400,  background:"linear-gradient(0deg, rgba(0,12,77,0.6420693277310925) 0%, rgba(77,0,21,0.6448704481792717) 54%, rgba(67,0,77,0.8101365546218487) 100%)"}}  className={classes.gradient}>
                <CardContent>
                    <Typography gutterBottom variant="h5" paddingBottom={3} component="div" sx={{color:"#fff"}}>
                    <SecurityIcon/> Professional
                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="white">
                    The professional plan adds features such as multifactor authentication, admin roles, the ability to connect an external database, and up to 10 Actions.

                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="white">
                    Pricing starts at $240/month for 1,000 monthly active users and scales to $1,500/month
                    </Typography>
                </CardContent> 
                <Stack direction="row" spacing={1}  className={classes.btn}  >
      <Button  variant="contained" >Make Payment</Button>
    </Stack>
            </Card>
            <Card sx={{ minWidth: 45 +"%" ,height:400,  background:"linear-gradient(0deg, rgba(0,5,76,0.6336659663865547) 0%, rgba(0,77,14,0.5972514005602241) 48%, rgba(0,60,77,0.6420693277310925) 100%)"}}  className={classes.gradient}>
                <CardContent>
                    <Typography gutterBottom variant="h5" paddingBottom={3} component="div" sx={{color:"#fff"}}>
                    <SecurityIcon/> Enterprise
                    </Typography>
                    <Typography gutterBottom variant="body3"paddingBottom={3} component="div" color="white">
                    The Enterprise plan has a 99.99% SLA with enterprise support and advanced cloud deployment options. This tier also allows private deployments.

                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="white">
                    Enterprise pricing is completely custom and requires you to speak to an Auth0 sales representative.
                    </Typography>
                </CardContent> 
                <Stack direction="row" spacing={1}  className={classes.btn}  >
      <Button  variant="contained" >Make Payment</Button>
    </Stack>
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
   
    </div>
        
        </>
    )
}