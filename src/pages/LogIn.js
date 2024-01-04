import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

// Font? (Lato)

const LogIn = () => {

    const [userId, setUserId] = useState("")
    const [userPw, setUserPw] = useState("")

    function handleUserId(e) {
        setUserId(e.target.value)
    }

    return (
        <>
            <Grid container spacing={2}>
                {/* Right side of screen: Graphics */}
                {/* To fix: Making photo responsive, and also have the screen */}
                <Grid container item xs={6}>
                    <img alt="complex" src="./E2ELoginLeftSide.png" width={"100%"} />
                </Grid>

                {/* Left side of screen: Sign-in */}
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center" item xs={6}>

                    {/* Top half: Platform Sign-in Options */}
                    <Grid container item
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Typography variant="h3" gutterBottom>
                            Welcome back
                        </Typography>

                        <Stack direction="column" spacing={2}>
                            {/* startIcon={< GOOGLE ICON />} */}
                            <Button variant="outlined">
                                Sign in with Google
                            </Button>
                            {/* Putting startIcon={< />} */}
                            <Button variant="outlined">
                                Sign in with Apple
                            </Button>
                        </Stack>
                    </Grid>

                    {/* To fix: Divider does not show line, only text */}
                    <Divider>OR</Divider>

                    {/* Bottom half: Other Sign-in Options */}
                    <Grid container item
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <TextField required id="outlined-basic" label="Username or Email" variant="outlined" />
                        <TextField required id="outlined-basic" label="Password" variant="outlined" />
                    </Grid>
                </Grid>
            </Grid>

            {/* Written before, moved but kept just in case */}
            <p>LogIn page content</p>
            <h1>{userId}</h1>
            <TextField value={userId} onChange={(event) => {
                setUserId(event.target.value);
            }} id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <Button variant="contained">Contained</Button>
        </>
    );
}


export default LogIn;