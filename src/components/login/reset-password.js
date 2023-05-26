import React from "react";
import { Paper, Grid, Input, Button ,Stack} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { useState  } from "react";
import {useHistory} from 'react-router-dom';
import { useParams, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

}));

const Resetpass = () => {
    const history = useHistory();
    const [password,setPassword] = useState("")

    const {token} = useParams()
    const formHandler = (e) => {
     
      e.preventDefault();
      let password = e.target[0].value;
      let config = { 'headers' : { 'Content-Type' : 'application/json', 'Authorization' : "Bearer 12228492498479284917491498" },   body:JSON.stringify({
        password,
        token
    }) };
      axios.post(`http://localhost:8080/new-password/${token}`,{ password : password , token: token }, config).then(resp => {
        
               if(resp.status === 200){
              // return <Redirect to="/" />;
               history.push("/login");
                      }
          else{
              alert(resp.message);
          }
  
      },(err) => {
  
      })
      
    }

    const classes = useStyles();
    const paperStyle = { padding: 30, height: '40vh', width: 300, margin: "70px auto", boxShadow: "5px 10px #bb0000" }
    const btnstyle = { margin: '45px 0' }
    return (
        <>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' color='black'>
                    <h2>Reset Password</h2>
                </Grid>
                <form onSubmit={(e) => { formHandler(e) }}>
                    <Stack spacing={4} direction='column'>
                    <Input type='password' label='New Password' required placeholder='New Password' name='password' fullWidth  onChange={(e)=>setPassword(e.target.value)} />
                    <Button type='submit' value='Submit' color='primary' variant="contained" style={btnstyle} fullWidth>Submit</Button>
                </Stack>
                </form>

            </Paper>
        </>);

}
export default Resetpass;


