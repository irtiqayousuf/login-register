import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Sidenav from './sidenav';
import { Box } from '@mui/system';
import { AppBar, Button } from '@mui/material';
import Navbar from './navbar';
import {
    Grid, Card, CardContent
} from '@mui/material';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    gradientLight: {
        background: "rgb(112, 195, 205)",
        background: "#eceff1"
    },
    iconStyle: {
        marginTop: "0px",        
        color: "#bb0000",
    },
    bgcolor: {
        minHeight: "100vh",
        background: "#eceff1",
        background: "#eceff1",

    },
    home: {
        marginTop: "20px",
        
    },
    app: {
        backgroundColor: "#bb0000",
        color: "white",
        padding: '17px',
        borderRadius: '5px',
        fontSize: "25px",
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
    },
}));


export default function Dboard() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <div className={classes.bgcolor}>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />

                    <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={1} direction="row" >
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <FeedOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            Round The Clock Bulk SMS Delivery
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Send Transactional SMS 24/7 to update your clients 
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <BrowserUpdatedOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            100% Instant Bulk Sms Delivery
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Using our api, your clients would get 100% assured instant delivery within no time!
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <ShoppingBagOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            Easy to Use Bulk Sms Panel UI
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Our Easy to Use Api Panel would make a non-technical person to handle their Bulk sms campaign on his own. Its just a click and go.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 37 + "%", height: 250, textAlign: 'center',backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent >
                                            <div className={classes.iconStyle}>
                                                <LocalMallOutlinedIcon fontSize='large'/>
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" sx={{ color: "#bb0000" }}>
                                            Generate Leads Using Bulk Sms Marketing
                                            </Typography>
                                            <Typography gutterBottom variant="body3" component="div" color="#000000">
                                            Using our online Bulk sms marketing tool you would be able to generate a good business leads for your company.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                                <Stack spacing={1} className={classes.home} direction="row">
                                    <Card sx={{ minWidth: 146 + "%", height: 450, backgroundImage: `url('https://img.freepik.com/premium-vector/abstract-white-gray-background-texture-with-many-triangles-vector-illustration_532963-2323.jpg')` }} >
                                        <CardContent>
                                            <Box>
                                                <div color='red'>
                                                    <AppBar position='static' variant='h1' className={classes.app}><b>Follow The Given Below Instructions:</b></AppBar>
                                                </div>

                                                <Typography variant=" subtitle2:h2" noWrapcomponent="div" sx={{ display: { xs: 'none', sm: 'block', padding: '15px', margin: '25px' } }}>
                                                    <Stack margin={2} direction="column">
                                                        Step 1: Click on the proceed button given below.
                                                    </Stack>
                                                    <Stack margin={2} direction="column">
                                                        Step 2: Choose your plan and proceed.
                                                    </Stack>
                                                    <Stack margin={2} direction="column">
                                                        Step 3: Now fill the details in the form and make payment.
                                                    </Stack>
                                                    <Stack margin={2} direction="column">
                                                        Step 4: After successful payment you will get otp on your registered number.
                                                    </Stack>
                                                    <Stack margin={2} direction="column">
                                                        Step 5: Enter that given otp and you will be authorized user.
                                                    </Stack>

                                                </Typography>
                                                <Stack direction="row" spacing={1} className={classes.btn}  >
                                                    <Button variant="contained" onClick={() => { history.push('/pricing') }}>Proceed</Button>
                                                </Stack>


                                            </Box>
                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>

                        </Grid>


                        <Box height={20} />
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={8}>
                            </Grid>
                            <Grid item xs={4}>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
                {/* <div>
        <Bottom/>
    </div> */}
            </div>

        </>
    )
}