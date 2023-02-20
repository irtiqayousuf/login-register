import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import './index.css';
import NotFound from './components/not-found';
import Login from './components/login/login';
import AdminLogin from './components/login/adminLogin';
import Register from './components/register/register';
import Pricing from './components/dashboard/pricing';
import Dboard from './components/dashboard/dashboard';
import AdminDashboard from './components/admindashboard/admindashboard';
import reportWebVitals from './reportWebVitals';
import Forgotpass from './components/login/forgot-password';
import Resetpass from './components/login/reset-password'
import Basic from './components/dashboard/basic';
import Standard from './components/dashboard/standard';
import Premium from './components/dashboard/premium';
import QRCode from './components/dashboard/qrcode';
import Profile from './components/dashboard/profile';
import { ThemeProvider } from '@mui/material';
import Home from './components/home/home';
import theme from "./theme";
import GetCustomers from './components/admindashboard/getcustomers';
import Logout from './components/dashboard/logout';
import AdminLogout from './components/admindashboard/adminlogout';
import RegisterAdmin from './components/admindashboard/newadmin';
import GetToken from './components/dashboard/getToken';
import Message from './components/dashboard/msg';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <Router>
         <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/adminLogin" component={AdminLogin} />
          <Route path="/register"  component={Register}/>
          <Route path="/newadmin"  component={RegisterAdmin}/>
          <Route path="/dashboard" component={Dboard}/> 
          <Route path="/admindashboard" component={AdminDashboard}/>  
          <Route path="/forgot" component={Forgotpass}/>  
          <Route path="/reset/:token" component={Resetpass}/>  
          <Route path="/basic" component={Basic}/> 
          <Route path="/standard" component={Standard}/> 
          <Route path="/premium" component={Premium}/> 
          <Route path="/pricing" component={Pricing}/> 
          <Route path="/qrcode" component={QRCode}/> 
          <Route path='/profile' component={Profile}/> 
          <Route path='/getcustomers' component={GetCustomers}/> 
          <Route path='/logout' component={Logout}/> 
          <Route path='/adminlogout' component={AdminLogout}/> 
          <Route path='/getToken' component={GetToken}/> 
          <Route path ='/msg' component={Message}/>
          <Route component={NotFound} />
        </Switch>
  </Router>
  </ThemeProvider>
);

