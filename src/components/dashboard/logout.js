import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Navbar from './navbar';
import Sidenav from './sidenav';
import { Paper, Typography} from "@mui/material";
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';

export default function Logout(){
     const history=useHistory();
      const logout=() =>{
           
        localStorage.clear();
        history.push("/");
     }
    const paperStyle={padding :20,height:'50vh',width:600, margin:"15px auto",  boxShadow:"5px 5px #bb0000"}
    return(
       <>
        <Navbar />
        <Box height={60} paddingTop={20} >
       </Box> <Box sx={{ display: 'flex' }}>
         <Sidenav/>
         <Paper elevation={24} style={paperStyle}  variant="outlined" >
                <Stack spacing={6} direction="row" paddingBottom={5} paddingTop={4}>
                <Typography variant='h3'>Log out</Typography> 
                </Stack>

                <Stack spacing={9} direction="row" paddingBottom={7}>
                <Typography variant='h5'>Are you sure you want to log out?</Typography> 
                </Stack>
                
                <Stack spacing={2} direction="row" paddingLeft={40}>
                <Button  variant="outlined" onClick={()=>{history.push('/dashboard')}}>Cancel</Button>
                <Button  variant="contained" onClick={logout}>Logout</Button>
                </Stack>

                </Paper>
      
        </Box>
     </>

       
    )
}