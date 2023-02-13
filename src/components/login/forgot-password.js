import React from 'react';
import {Paper ,Grid, Input,Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { useState, useContext  } from "react";
import { Link, useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   
  }));

const Forgotpass=()=>{
  
  const [email, setEmail] = useState("")
  const history = useHistory();

  const formHandler = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let config = { 'headers' : { 'Content-Type' : 'application/json', 'Authorization' : "Bearer 12228492498479284917491498" } };
    axios.post("http://localhost:8080/reset-password",{ email : email }, config).then(resp => {
        console.log("res" ,resp.data);
        let res = resp.data;
        if(!res.error && res.status === 200){
            // return <Redirect to="/" />;
            localStorage.setItem("user",JSON.stringify(res.data));
          //  setTimeout(()=>{
          //    history.push("/login");
          //  },100)
        }
        else{
            alert(res.message);
        }

    },(err) => {

    })
    
  }

    const classes = useStyles();
    const paperStyle={padding :30,height:'40vh',width:300, margin:"70px auto",  boxShadow:"5px 10px #004d4d"}
    const btnstyle={margin:'45px 0'}
    return(
        <>
         <Paper elevation={10} style={paperStyle}>
                <Grid align='center'  color='#004d4d'>
                    <h2>Forget Password</h2>
                </Grid>
                <form  onSubmit={(e) => { formHandler(e) }}>
                <Input  type='email' label='Email'required placeholder='Enter email' name='email' fullWidth onChange={(e) => setEmail(e.target.value)}/>              
                <Button type='submit' value='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Send Reset Code</Button>
              </form>
               
            </Paper>
        </>
    );
}
export default Forgotpass;



