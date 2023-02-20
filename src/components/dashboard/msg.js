import React from "react";
import Sidenav from "./sidenav";
import Box from '@mui/material/Box';
import Navbar from "./navbar";
import {Paper} from "@mui/material";
import Stack from "@mui/material/Stack";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import {Typography} from "@mui/material";


export default function Message(){
    const paperStyle={padding :60,height:'40vh',width:550, margin:"20px auto",  boxShadow:"5px 5px #bb0000"}
    return(
        <>
        <Navbar />
        <Box height={60} paddingTop={20} >
     //</Box> <Box sx={{ display: 'flex' }}>
         <Sidenav/>
         <Paper elevation={24} style={paperStyle}  variant="outlined" >
            <Stack spacing={4} direction="row">
              < CheckCircleOutlinedIcon   sx={{ fontSize: "100px" ,alignContent:"center", color:"#bb0000"}} />
              <Typography variant='h5' > Token Has Been Successfully Generated On Your Email .</Typography>
              </Stack>
            </Paper>


       </Box>
        </>
    )
}