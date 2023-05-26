import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VpnLockOutlinedIcon from '@mui/icons-material/VpnLockOutlined';

import MenuIcon from '@mui/icons-material/Menu';
import {useAppStore} from '../../appStore';


const AppBar = styled(MuiAppBar, {
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const updateOpen=useAppStore((state)=>state.updateOpen);
  const dopen=useAppStore((state)=>(state.dopen));
const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"   sx={{backgroundColor:"#bb0000" ,color:"white"}}>
     
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>{updateOpen(!dopen)}}
          >
           <VpnLockOutlinedIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
        AUTHENTICATION SYSTEM API
          </Typography>
         
          
        </Toolbar>
      </AppBar>
 
    </Box>
  );
}