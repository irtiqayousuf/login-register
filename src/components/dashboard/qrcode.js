import React from "react";
import Sidenav from "./sidenav";
import Box from '@mui/material/Box';
import Navbar from "./navbar";
import { Grid ,Paper,Button, TextField, Input} from "@mui/material";
import Stack from "@mui/material/Stack";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from "axios";
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



const useStyles= makeStyles((theme)=>({
    log: {
        backgroundImage: `linear-gradient(90deg, rgba(0,77,77,0.7959558823529411) 0%, rgba(0,77,77,0.5018382352941176) 47%, rgba(0,77,77,0.3533788515406162) 100%),
      url('https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
        height: "700px",
        width:"50px",
      
    },

    btn:{
      justifyContent:"center",
      alignItems:"center",
    },
    
    qr:{
        justifyContent:"center",
        alignItems:"center",
        
      },
    
  
}));


export default function QRCode(){
  const classes= useStyles();
  const history=useHistory();

   const paperStyle={padding :20,height:'60vh',width:500, margin:"10px auto",  boxShadow:"5px 5px #bb0000"}
    const btnstyle={margin:'40px 0' }
    return(
        <>
          <Navbar />
        <Box height={60} paddingTop={20} >
        </Box> 
         <Box sx={{ display: 'flex' }}>
         <Sidenav/>
       
         <Paper elevation={24} style={paperStyle}  variant="outlined">
                <Grid align='center'>
                    <h3>Please scan this QR to make payment</h3>
                </Grid>
                <Stack spacing={4} direction="cloumn" paddingLeft={19}>
                <ImageList sx={{ width: 500, height: 200 }} row={1} colHeight={204} className={classes.qr} paddingRight={20}>
        <ImageListItem >
          <img
            src='https://www.nicepng.com/png/detail/851-8518258_qr-code-png-images-qr-code.png'
            srcSet='https://www.nicepng.com/png/detail/851-8518258_qr-code-png-images-qr-code.png&dpr=2 5x'
            loading="lazy"
          />
        </ImageListItem>
    </ImageList>
    </Stack>
    <Stack spacing={1} direction="row" className={classes.btn}  >
                <Button type='submit' value='Submit' color='primary' variant="contained" onClick={()=>{history.push('/getToken')}}>Next</Button>
                <Button type='submit'  color='primary' variant="contained"   onClick={()=>{history.push('/pricing')}} >Go Back</Button>
               
                </Stack>
            </Paper>

    </Box>
       </>
    )
}


