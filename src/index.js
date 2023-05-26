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
import KeyDetails from './components/dashboard/key';
import Api from './components/dashboard/apis';
import SingleView from './components/admindashboard/singleview';
import ProtectedRoute from "./components/protectedroutes"
import PrivateRoute from './components/privateroutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <Router>
         <Switch>
         <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/adminLogin" component={AdminLogin} />
          <Route path="/register"  component={Register}/>
          <PrivateRoute path="/newadmin"  component={RegisterAdmin}/>
          <ProtectedRoute path="/dashboard" component={Dboard}/> 
          <PrivateRoute path="/admindashboard" component={AdminDashboard}/>  
          <Route path="/forgot" component={Forgotpass}/>  
          <Route path="/reset/:token" component={Resetpass}/>  
          <ProtectedRoute path="/basic" component={Basic}/> 
          <ProtectedRoute path="/standard" component={Standard}/> 
          <ProtectedRoute path="/pricing" component={Pricing}/> 
          <ProtectedRoute path="/qrcode" component={QRCode}/> 
          <ProtectedRoute path='/profile' component={Profile}/> 
          <PrivateRoute path='/getcustomers' component={GetCustomers}/> 
          <ProtectedRoute path='/logout' component={Logout}/> 
          <PrivateRoute path='/adminlogout' component={AdminLogout}/> 
          <ProtectedRoute path='/token-details' component={GetToken}/> 
          <Route path ='/msg' component={Message}/>
          <ProtectedRoute path='/api' component={Api}/>
          <Route path="/singleview" component={SingleView}/>
          <Route component={NotFound} />
        </Switch>
  </Router>
  </ThemeProvider>
);

