import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Sidenav from './sidenav';
import { Box, textAlign } from '@mui/system';
import Navbar from './navbar';
import Button from '@mui/material/Button';
import SecurityIcon from '@mui/icons-material/Security';
import { Grid,Card, CardContent
 } from '@mui/material';
 import {useState, useEffect} from 'react';
 import axios from 'axios';
 import { useHistory } from 'react-router-dom';

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
    log: {
        backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')`,
        height: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        color:"white",
        alignContent:"center",
        justifyContent:"center"
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
         <Typography variant="h5" color="#bb0000" fontWeight="bold" className={classes.glow}>
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
                
               <Stack spacing={4} direction="row" paddingLeft={10}>
               { price.map((i) => (
               <Card key={i.id} className={classes.log} sx={{ minWidth: 70 +"%" ,height:500,textAlign: 'center'}} >
                <CardContent  paddingBottom={3}>
                    <Typography gutterBottom variant="h5" paddingBottom={3} component="div" sx={{color:"#bb0000"}}>
                    <SecurityIcon sx={{color:"#bb0000"}}/> {i.title}
                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="#000000">
                     {i.subtitle}                    
                    </Typography>
                    <Typography gutterBottom variant="body3" paddingBottom={3} component="div" color="#000000">
                   {i.subtitle2}
                    </Typography>
           
                <Stack direction="row" spacing={1}  className={classes.btn}  >
                 <Button  variant="contained" onClick={()=> {
                     if(i.id === 1){
                        {history.push('/basic')}
                    } else if(i.id === 2){
                        {history.push('/standard')}
                    } else {
                        {history.push('/premium')}
                    }
                   
                 }
 }>{i.price_id}</Button>
    </Stack>
    </CardContent>
            </Card>
 ))}
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