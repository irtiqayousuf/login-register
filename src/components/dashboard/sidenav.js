import  React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
//import MuiAppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
//import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WebhookIcon from '@mui/icons-material/Webhook';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
//import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useHistory } from 'react-router-dom';
import { useAppStore } from '../../appStore';
import { useParams } from 'react-router-dom';
import Profile from './profile';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
 const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );
  
  export default function Sidenav() {
    const theme = useTheme();
    //const [open, setOpen] = React.useState(true);
   const history=useHistory();
   // const updateOpen=useAppStore((state)=>state.updateOpen);
    const open=useAppStore((state)=>(state.dopen));
    
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box height={30}/>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')`}}>
            {[<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{history.push('/dashboard')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <DashboardIcon sx={{color:"#bb0000"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>]}
              <Divider />

              {[<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{history.push('/profile')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <AccountCircleIcon sx={{color:"#bb0000"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>]}
              <Divider />

              {[<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{history.push('/api')}} >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <WebhookIcon sx={{color:"#bb0000"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Developer API" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>]}
              <Divider />
              
              {[<ListItem disablePadding sx={{ display: 'block' }} >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <AssessmentIcon sx={{color:"#bb0000"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Reports" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>]}
              <Divider />

              {[<ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{history.push('/logout')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                   <SettingsIcon sx={{color:"#bb0000"}}/>
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>]}
              
          </List>
          <Divider />
         
        </Drawer>
        
      </Box>
    );
  }