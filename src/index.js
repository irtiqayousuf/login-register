import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import './index.css';
import NotFound from './components/not-found';
import Login from './components/login/login';
import Register from './components/register/register';
import Pricing from './components/dashboard/pricing';
import Dboard from './components/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import Forgotpass from './components/login/forgot-password';
import Resetpass from './components/login/reset-password'
import Customers from './components/dashboard/customer-data';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
    <Router>
         <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register"  component={Register}/>
          <Route path="/dashboard" component={Dboard}/>   
          <Route path="/forgot" component={Forgotpass}/>  
          <Route path="/reset" component={Resetpass}/>  
          <Route path="/customer" component={Customers}/> 
          <Route path="/pricing" component={Pricing}/> 
          <Route component={NotFound} />
        </Switch>
  </Router>
  </ThemeProvider>
);

