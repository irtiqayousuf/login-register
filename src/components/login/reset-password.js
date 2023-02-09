import React from "react";
import { Paper, Grid, Input, Button ,Stack} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { useState  } from "react";
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

}));

const Resetpass = () => {
    const history = useHistory();

    const formHandler = (e) => {
      e.preventDefault();
      let newpassword = e.target[0].value;
      let confirmpassword = e.target[1].value;
      let config = { 'headers' : { 'Content-Type' : 'application/json', 'Authorization' : "Bearer 12228492498479284917491498" } };
      axios.post("http://localhost:8080/new-password",{ newpassword : newpassword , confirmpassword : confirmpassword }, config).then(resp => {
          console.log("res" ,resp.data);
          let res = resp.data;
          if(!res.error && res.status === 200){
              // return <Redirect to="/" />;
              localStorage.setItem("user",JSON.stringify(res.data));
             setTimeout(()=>{
               history.push("/login");
             },100)
          }
          else{
              alert(res.message);
          }
  
      },(err) => {
  
      })
      
    }

    const classes = useStyles();
    const paperStyle = { padding: 30, height: '40vh', width: 300, margin: "70px auto", boxShadow: "5px 10px #004d4d" }
    const btnstyle = { margin: '45px 0' }
    return (
        <>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' color='#004d4d'>
                    <h2>Reset Password</h2>
                </Grid>
                <form onSubmit={(e) => { formHandler(e) }}>
                    <Stack spacing={4} direction='column'>
                    <Input type='password' label='New Password' required placeholder='New Password' name='password' fullWidth />
                    <Input type='password' label='Confirm Password' required placeholder='Confirm Password' name='Confirm password' fullWidth />
                    <Button type='submit' value='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                </Stack>
                </form>

            </Paper>
        </>);

}
export default Resetpass;